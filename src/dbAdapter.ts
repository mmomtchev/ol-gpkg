import * as GPKG from '@ngageoint/geopackage';
import { createHttpBackend, initSyncSQLite } from 'sqlite-wasm-http';
import * as SQLite from 'sqlite-wasm-http/sqlite3.js';
import { debug } from './debug.js';

/**
 * This adapter uses sqlite-wasm-http
 * @see {@link https://github.com/mmomtchev/sqlite-wasm-http|sqlite-wasm-http}
 */
export class SQLiteWasmHttp implements GPKG.DBAdapter {
  db: SQLite.DB | null;
  filePath: string;

  /**
   * Returns a Promise which, when resolved, returns a DBAdapter which has connected to the GeoPackage database file
   */
  initialize(): Promise<this> {
    const backend = createHttpBackend({ backendType: 'sync', maxPageSize: 4096 });
    return initSyncSQLite({http: backend}).then((sqlite3) => {
      this.db = new sqlite3.oo1.DB({filename: encodeURI(this.filePath), vfs: 'http'});
      return this;
    });
  }

  /**
   * @param  {string} [url] url of the GeoPackage file
   */
  constructor(url?: string | Buffer | Uint8Array) {
    if (typeof url !== 'string')
      throw new Error(`Unsupported URL type ${typeof url}`)
    this.filePath = url;
    this.db = null;
  }

  size(): number {
    throw new Error('Method not implemented.');
  }

  readableSize(): string {
    throw new Error('Method not implemented.');
  }

  /**
   * Closes the connection to the GeoPackage
   */
  close(): void {
    if (!this.db) throw new Error('Not initialized');

    this.db.close();
  }
  /**
   * Get the connection to the database file
   * @return {any}
   */
  getDBConnection(): any {
    return this.db;
  }
  /**
   * Returns a Uint8Array containing the contents of the database as a file
   */
  async export(): Promise<Uint8Array> {
    throw new Error('Method not implemented.');
  }
  /**
   * Registers the given function so that it can be used by SQL statements
   * @param  {string} name               name of function to register
   * @param  {Function} functionDefinition function to register
   * @return {Adapter} this
   */
  registerFunction(name: string, functionDefinition: Function): this {
    throw new Error('Method not implemented.');
  }
  /**
   * Gets one row of results from the statement
   * @see {@link https://sqlite.org/wasm/doc/trunk/api-oo1.md#stmt-get|SQLite WASM get()}
   * @param  {String} sql    statement to run
   * @param  {Array|Object} [params] substitution parameters
   * @return {Object}
   */
  get(sql: string, params?: [] | Record<string, GPKG.DBValue>): Record<string, GPKG.DBValue> {
    debug('get', sql);
    if (!this.db) throw new Error('Not initialized');

    const stmt = this.db.prepare(sql);
    stmt.bind(params as Record<string, GPKG.DBValue>);
    let row: Record<string, GPKG.DBValue> | undefined;
    if (stmt.step()) {
      row = stmt.get({}) as Record<string, GPKG.DBValue>;
    }
    stmt.finalize();

    return row as Record<string, GPKG.DBValue>;
  }
  /**
   * Determines if a tableName exists in the database
   * @param {String} tableName
   * @returns {Boolean}
   */
  isTableExists(tableName: string): boolean {
    debug('isTableExists', tableName);
    if (!this.db) throw new Error('Not initialized');

    const stmt = this.db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=:name");
    stmt.bind([tableName]);
    let row: Record<string, GPKG.DBValue> | undefined;
    if (stmt.step()) {
      row = stmt.get({}) as Record<string, GPKG.DBValue>;
    }
    stmt.finalize();
    return !!row;
  }
  /**
   * Gets all results from the statement in an array
   * @param  {String} sql    statement to run
   * @param  {Array|Object} [params] bind parameters
   * @return {Object[]}
   */
  all(sql: string, params?: [] | Record<string, GPKG.DBValue>): Record<string, GPKG.DBValue>[] {
    debug('all', sql, params);
    if (!this.db) throw new Error('Not initialized');

    const results = this.db.exec(sql, {
      bind: params as Record<string, GPKG.DBValue>,
      rowMode: 'object'
    });
    return results as Record<string, GPKG.DBValue>[];
  }
  /**
   * Returns an Iterable with results from the query
   * @param  {string} sql    statement to run
   * @param  {Object|Array} params bind parameters
   * @return {IterableIterator<Object>}
   */
  each(sql: string, params?: [] | Record<string, GPKG.DBValue>): IterableIterator<Record<string, GPKG.DBValue>> {
    debug('each', sql);
    if (!this.db) throw new Error('Not initialized');

    const stmt = this.db.prepare(sql);
    stmt.bind(params as Record<string, GPKG.DBValue>);
    return {
      [Symbol.iterator](): IterableIterator<Record<string, GPKG.DBValue>> {
        return this;
      },
      next: function (): { value: Record<string, GPKG.DBValue>; done: boolean; } {
        if (stmt.step()) {
          return {
            value: stmt.get({}) as Record<string, GPKG.DBValue>,
            done: false,
          };
        } else {
          stmt.finalize();
          return {
            done: true
          } as IteratorReturnResult<Record<string, GPKG.DBValue>>;
        }
      },
    };
  }
  /**
   * Runs the statement specified, returning information about what changed
   * @see {@link https://sqlite.org/wasm/doc/trunk/api-oo1.md#db-exec|SQLite WASM exec()}
   * @param  {string} sql    statement to run
   * @param  {Object|Array} [params] bind parameters
   * @return {Object} object containing a changes property indicating the number of rows changed and a lastInsertROWID indicating the last inserted row
   */
  run(sql: string, params?: [] | Record<string, SQLite.SQLBindable>): { changes: number; lastInsertRowid: number; } {
    debug('run', sql);
    if (!this.db) throw new Error('Not initialized');

    if (params && !(params instanceof Array)) {
      for (const key in params) {
        params['$' + key] = params[key];
      }
    }
    this.db.exec(sql, {bind: params});
    const lastId = this.db.exec('select last_insert_rowid();', {rowMode: 'array'});
    let lastInsertedId: SQLite.SQLValue | undefined;
    if (lastId) {
      lastInsertedId = lastId[0][0];
    }
    return {
      lastInsertRowid: +(lastInsertedId as number),
      changes: this.db.changes(),
    };
  }
  /**
   * Runs the specified insert statement and returns the last inserted id or undefined if no insert happened
   * @param  {String} sql    statement to run
   * @param  {Object|Array} [params] bind parameters
   * @return {Number} last inserted row id
   */
  insert(sql: string, params?: [] | Record<string, GPKG.DBValue>): number {
    throw new Error('HTTP VFS is read-only');
  }
  /**
   * Prepares a SQL statement
   * @param sql
   */
  prepareStatement(sql: string): any {
    if (!this.db) throw new Error('Not initialized');

    return this.db.prepare(sql);
  }
  /**
   * Runs an insert statement with the parameters provided
   * @param  {any} statement  statement to run
   * @param  {Object|Array} [params] bind parameters
   * @return {Number} last inserted row id
   */
  bindAndInsert(statement: any, params?: [] | Record<string, GPKG.DBValue>): number {
    throw new Error('HTTP VFS is read-only');
  }
  /**
   * Closes a prepared statement
   * @param statement
   */
  closeStatement(statement: any): void {
    statement.finalize();
  }
  /**
   * Runs the specified delete statement and returns the number of deleted rows
   * @param  {String} sql    statement to run
   * @param  {Object|Array} [params] bind parameters
   * @return {Number} deleted rows
   */
  delete(sql: string, params?: [] | Record<string, GPKG.DBValue>): number {
    throw new Error('HTTP VFS is read-only');
  }
  /**
   * Drops the table
   * @param  {String} table table name
   * @return {Boolean} indicates if the table was dropped
   */
  dropTable(table: string): boolean {
    throw new Error('HTTP VFS is read-only');
  }
  /**
   * Counts rows that match the query
   * @param  {String} tableName table name from which to count
   * @param  {String} [where]     where clause
   * @param  {Object|Array} [whereArgs] where args
   * @return {Number} count
   */
  count(tableName: string, where?: string, whereArgs?: [] | Record<string, GPKG.DBValue>): number {
    let sql = 'SELECT COUNT(*) as count FROM "' + tableName + '"';
    if (where) {
      sql += ' where ' + where;
    }
    return this.get(sql, whereArgs).count as number;
  }

  transaction(func: Function): void {
    // Transactions are no-op on read-only tables
  }

  /**
   * Enable or disable unsafe mode
   * @param enabled
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  unsafe(enabled: boolean): void { }

  /**
   * Returns a result set for the given query
   */
  query(sql: string, params?: [] | Record<string, GPKG.DBValue>): GPKG.ResultSet {
    debug('query', sql, params);
    if (!this.db) throw new Error('Not initialized');

    const stmt = this.db.prepare(sql);
    stmt.bind(params as Record<string, GPKG.DBValue>);
    return new GPKG.ResultSet(
      {
        [Symbol.iterator](): IterableIterator<Record<string, GPKG.DBValue>> {
          return this;
        },
        next: function (): { value: Record<string, GPKG.DBValue>; done: boolean; } {
          if (stmt.step()) {
            debug('query next item', stmt.get({}));
            return {
              value: stmt.get({}) as Record<string, GPKG.DBValue>,
              done: false,
            };
          } else {
            stmt.finalize();
            return {
              done: true
            } as IteratorReturnResult<Record<string, GPKG.DBValue>>;
          }
        }
      },
      {
        close: (): void => {
          stmt.finalize();
        }
      },
      this,
    );
  }
}
