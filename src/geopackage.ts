import { SQLiteHTTPPool, VFSHTTP } from 'sqlite-wasm-http';

import * as Comlink from 'comlink';
import GPKGWorkerInterface, { GPKGRasterMetadata } from './worker.js';

import { Options as ImageTileOptions } from 'ol/source/TileImage.js';
import { Options as VectorTileOptions } from 'ol/source/VectorTile.js';
import { get as getProjection, transformExtent } from 'ol/proj.js';
import { getWidth } from 'ol/extent.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';
import { createXYZ } from 'ol/tilegrid.js';
import { debug } from './debug.js';
import { TileMatrix } from '@ngageoint/geopackage';

/**
 * Options for creating a GPKGRasterSource
 */
export interface GPKGRasterOptions extends ImageTileOptions {
  /**
   * List of layer names to selectively include, @default everything
   */
  layers?: string[];

  tileUrlFunction?: never;
  tileLoadFunction?: never;

  /**
   * Alternative method of specifying minZoom, mutually exclusive with tileGrid, requires explicit projection
   */
  minZoom?: number;

  /**
   * Alternative method of specifying minZoom, mutually exclusive with tileGrid, requires explicit projection
   */
  maxZoom?: number;

  /**
   * Optional tile grid, refer to the Openlayers manual
   */
  tileGrid?: TileGrid;

  /**
   * GPKG worker
   */
  worker: typeof GPKGWorkerInterface;
}

/**
 * Options for creating a GPKGVectorSource
 */
export interface GPKGVectorOptions extends VectorTileOptions {
  /**
   * List of layer names to selectively include, @default everything
   */
  layers?: string[];

  /**
   * Optional already open SQLiteHTTP pool (mutually exclusive with url)
   */
  pool?: Promise<SQLiteHTTPPool>;

  tileUrlFunction?: never;
  tileLoadFunction?: never;
  format?: never;
}

/**
 * Shared options for all MBTiles
 */
export interface SQLOptions {
  /**
   * URL of the remote MBTiles source
   */
  url: string;
  /**
   * Number of parallel workers to use for retrieving tiles, @default 4
   */
  sqlWorkers?: number;

  /**
   * Maximum expected page size in bytes for SQLite3 files, @default 4096
   */
  maxSqlPageSize?: number;

  /**
   * Memory to use for SQLite cache in KB, @default 4096
   */
  sqlCacheSize?: number;
}

export type GPKGOptions = GPKGVectorOptions | GPKGRasterOptions;

export function httpPoolOptions(options?: SQLOptions) {
  return {
    workers: options?.sqlWorkers ?? 4,
    httpOptions: {
      maxPageSize: options?.maxSqlPageSize ?? 4096,
      cacheSize: options?.sqlCacheSize ?? 4096
    } as VFSHTTP.Options,
  };
}

export class GPKG {
  private worker: typeof GPKGWorkerInterface;
  opt: SQLOptions;
  metadata: any;

  constructor(opt: SQLOptions) {
    const w = new Worker(new URL('./worker.js', import.meta.url));
    this.opt = opt;
    this.worker = Comlink.wrap(w) as typeof GPKGWorkerInterface;
  }

  open(): Promise<unknown> {
    return this.worker.open(this.opt).then((data) => {
      if (data.status === 'error') {
        throw data.error;
      }
      this.metadata = { rasters: data.rasters, vectors: [] };
      return this.metadata;
    });
  }

  getRaster(id: string): GPKGRasterOptions {
    const opts = {
      worker: this.worker
    } as GPKGRasterOptions;

    const md = this.metadata.rasters[id] as GPKGRasterMetadata;
    if (!md)
      throw new Error(`Invalid raster ${id}`);

    opts.projection = md.srs;
    opts.minZoom = md.minZoom;
    opts.tileGrid = new TileGrid({
      extent: md.extent,
      minZoom: md.minZoom,
      resolutions: md.resolutions
    });

    debug('getRaster', opts);
    return opts;
  }
}

