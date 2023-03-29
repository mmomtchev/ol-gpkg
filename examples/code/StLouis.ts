import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import TileDebug from 'ol/source/TileDebug.js';
import { fromLonLat } from 'ol/proj.js';

import { GPKGRasterSource } from '../../src/index.js';
import { GPKG } from '../../src/geopackage.js';

export default async function () {
  const gpkg = new GPKG({
    url: 'http://sokol.garga/StLouis.gpkg'
  });
  await gpkg.open();
  return new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new TileDebug()
      }),
      new TileLayer({
        source: new GPKGRasterSource(gpkg.getRaster('tiles'))
      })
    ],
    view: new View({
      center: fromLonLat([-90.190346, 38.620333]),
      zoom: 15
    }),
  });
}