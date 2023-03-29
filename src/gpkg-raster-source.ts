import { createSQLiteHTTPPool, SQLiteHTTPPool } from 'sqlite-wasm-http';

import ImageTileSource from 'ol/source/TileImage.js';
import Tile from 'ol/Tile.js';
import ImageTile from 'ol/ImageTile.js';
import { TileCoord } from 'ol/tilecoord.js';
import TileState from 'ol/TileState.js';

import { GPKGRasterOptions } from './geopackage.js';
import GPKGWorkerInterface from './worker.js';
import { debug } from './debug.js';

/**
 * A tile source in a remote .gpkg file accessible by HTTP
 */
export class GPKGRasterSource extends ImageTileSource {
  private worker: typeof GPKGWorkerInterface;

  /**
   * @param {GPKGRasterOptions} options options
   */
  constructor(options: GPKGRasterOptions) {
    super({
      ...options,
      url: undefined,
      // This is required to prevent Openlayers' cache from thinking that all tiles share the same URL
      tileUrlFunction: (coords: TileCoord) => `${options.url}#${coords[0]}:${coords[1]}:${coords[2]}`
    });
    this.worker = options.worker;

    this.setTileLoadFunction(this.tileLoader.bind(this));
  }

  private tileLoader(tile: Tile, _url: string) {
    debug('loading tile', [tile.tileCoord[0], tile.tileCoord[1], tile.tileCoord[2]]);
    const image = (tile as ImageTile).getImage() as HTMLImageElement;
    this.worker.getRasterTile(tile.tileCoord[0], tile.tileCoord[1], tile.tileCoord[2])
      .then((r) => {
        const blob = new Blob([r]);
        const imageUrl = URL.createObjectURL(blob);
        image.src = imageUrl;
        return;
      })
      .catch((e) => {
        debug(e);
        tile.setState(TileState.ERROR);
      });
  }

  disposeInternal() {
    //return this.pool.then((p) => p.close());
  }
}
