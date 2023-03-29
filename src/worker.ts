import * as GPKG from '@ngageoint/geopackage';
import * as Comlink from 'comlink';
import * as SQLite from 'sqlite-wasm-http/sqlite3.js';
import { SQLiteWasmHttp } from './dbAdapter.js';
import { debug } from './debug.js';
import { GPKGRasterOptions, GPKGVectorOptions, SQLOptions } from './geopackage.js';

GPKG.Context.setupCustomContext(SQLiteWasmHttp, GPKG.OffscreenCanvasAdapter);

export type GPKGRasterMetadata = {
  id: string;
  srs: string;
  extent: number[];
  minZoom: number;
  resolutions: number[];
};

let gpkg: GPKG.GeoPackage | undefined;
let rasters: Record<string, GPKGRasterMetadata>;
let gpr: GPKG.GeoPackageTileRetriever;

async function open(opts: SQLOptions & (GPKGRasterOptions | GPKGVectorOptions)) {
  rasters = {};
  try {
    gpkg = await GPKG.GeoPackageManager.open(opts.url);
    const tileTables = gpkg.getTileTables();
    for (const table of tileTables) {
      const tileDao = gpkg.getTileDao(table);
      const tableInfo = gpkg.getInfoForTable(tileDao);
      debug('tile tables', table, tileDao, tableInfo);
      rasters[table] = {
        id: table,
        extent: [tableInfo.tileMatrixSet.minX, tableInfo.tileMatrixSet.minY, tableInfo.tileMatrixSet.maxX, tableInfo.tileMatrixSet.maxY],
        minZoom: tableInfo.minZoom,
        srs: `${tableInfo.srs.organization}:${tableInfo.srs.id}`,
        resolutions: tileDao.getTileMatrices().map((m) => m.getPixelXSize())
      };
      gpr = new GPKG.GeoPackageTileRetriever(tileDao);
    }
    return { status: 'ok' as const, rasters };
  } catch (error) {
    rasters = {};
    return { status: 'error' as const, error };
  };
}

async function getRasterTile(z: number, x: number, y: number): Promise<Uint8Array> {
  debug('getRasterTile', x, y, z);
  const tile = await gpr.getTile(x, y, z);
  console.log('GOT', tile);
  if (!tile) throw new Error(`Failed retrieving ${z}:${x}:${y}`);
  const image = tile.getData();
  console.log('IMAGE', image);
  return image;
}

const iface = {
  open,
  getRasterTile
};
export default iface;

Comlink.expose(iface);
