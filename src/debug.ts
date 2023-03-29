declare const OL_GPKG_DEBUG: string;
const debugEnabled = (typeof OL_GPKG_DEBUG !== 'undefined' && OL_GPKG_DEBUG) ||
  (typeof process !== 'undefined' && typeof process?.env?.OL_GPKG_DEBUG !== 'undefined' && process.env.OL_GPKG_DEBUG);

export const debug = debugEnabled ? console.debug.bind(console) : () => undefined;
