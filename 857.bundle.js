"use strict";(self.webpackChunkol_gpkg=self.webpackChunkol_gpkg||[]).push([[857],{4857:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var r,n=o(6410),s=o(4382),i=o(2724),c=o(3792),a=o(1202),l=o(4375),u=o(8948);const d="undefined"!=typeof process&&void 0!==(null===(r=null===process||void 0===process?void 0:process.env)||void 0===r?void 0:r.OL_GPKG_DEBUG)&&process.env.OL_GPKG_DEBUG?console.debug.bind(console):()=>{};class h{constructor(e){const t=new Worker(new URL(o.p+o.u(38),o.b));this.opt=e,this.worker=l.Ud(t)}open(){return this.worker.open(this.opt).then((e=>{if("error"===e.status)throw e.error;return this.metadata={rasters:e.rasters,vectors:[]},this.metadata}))}getRaster(e){const t={worker:this.worker},o=this.metadata.rasters[e];if(!o)throw new Error(`Invalid raster ${e}`);return t.projection=o.srs,t.minZoom=o.minZoom,t.tileGrid=new u.Z({extent:o.extent,minZoom:o.minZoom,resolutions:o.resolutions}),d("getRaster",t),t}}var w=o(2102),p=o(3584);class v extends w.Z{constructor(e){super(Object.assign(Object.assign({},e),{url:void 0,tileUrlFunction:t=>`${e.url}#${t[0]}:${t[1]}:${t[2]}`})),this.worker=e.worker,this.setTileLoadFunction(this.tileLoader.bind(this))}tileLoader(e,t){d("loading tile",[e.tileCoord[0],e.tileCoord[1],e.tileCoord[2]]);const o=e.getImage();this.worker.getRasterTile(e.tileCoord[0],e.tileCoord[1],e.tileCoord[2]).then((e=>{const t=new Blob([e]),r=URL.createObjectURL(t);o.src=r})).catch((t=>{d(t),e.setState(p.Z.ERROR)}))}disposeInternal(){}}var g=function(e,t,o,r){return new(o||(o=Promise))((function(n,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function c(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))};function f(){return g(this,void 0,void 0,(function*(){const e=new h({url:"https://velivole.b-cdn.net/StLouis.gpkg"});return yield e.open(),new n.Z({target:"map",layers:[new s.Z({source:new c.Z}),new s.Z({source:new v(e.getRaster("tiles"))})],view:new i.ZP({center:(0,a.mi)([-90.190346,38.620333]),zoom:15})})}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODU3LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiMk1BQ0EsTUFHYUEsRUFGUyxvQkFBWkMsY0FBa0UsS0FBcEIsUUFBWixFQUFPLE9BQVBBLGNBQU8sSUFBUEEsYUFBTyxFQUFQQSxRQUFTQyxXQUFHLGVBQUVDLGdCQUFpQ0YsUUFBUUMsSUFBSUMsY0FFbkVDLFFBQVFKLE1BQU1LLEtBQUtELFNBQVcsS0FBZSxFQ2tHMUUsTUFBTUUsRUFLWEMsWUFBWUMsR0FDVixNQUFNQyxFQUFJLElBQUlDLE9BQU8sSUFBSUMsSUFBSSxrQkFDN0JDLEtBQUtKLElBQU1BLEVBQ1hJLEtBQUtDLE9BQVMsS0FBYUosRUFDN0IsQ0FFQUssT0FDRSxPQUFPRixLQUFLQyxPQUFPQyxLQUFLRixLQUFLSixLQUFLTyxNQUFNQyxJQUN0QyxHQUFvQixVQUFoQkEsRUFBS0MsT0FDUCxNQUFNRCxFQUFLRSxNQUdiLE9BREFOLEtBQUtPLFNBQVcsQ0FBRUMsUUFBU0osRUFBS0ksUUFBU0MsUUFBUyxJQUMzQ1QsS0FBS08sUUFBUSxHQUV4QixDQUVBRyxVQUFVQyxHQUNSLE1BQU1DLEVBQU8sQ0FDWFgsT0FBUUQsS0FBS0MsUUFHVFksRUFBS2IsS0FBS08sU0FBU0MsUUFBUUcsR0FDakMsSUFBS0UsRUFDSCxNQUFNLElBQUlDLE1BQU0sa0JBQWtCSCxLQVdwQyxPQVRBQyxFQUFLRyxXQUFhRixFQUFHRyxJQUNyQkosRUFBS0ssUUFBVUosRUFBR0ksUUFDbEJMLEVBQUtNLFNBQVcsSUFBSUMsRUFBQSxFQUFTLENBQzNCQyxPQUFRUCxFQUFHTyxPQUNYSCxRQUFTSixFQUFHSSxRQUNaSSxZQUFhUixFQUFHUSxjQUdsQmpDLEVBQU0sWUFBYXdCLEdBQ1pBLENBQ1QsRSx3QkMvSEssTUFBTVUsVUFBeUIsSUFNcEMzQixZQUFZNEIsR0FDVkMsTUFBTSxPQUFELHdCQUNBRCxHQUFPLENBQ1ZFLFNBQUtDLEVBRUxDLGdCQUFrQkMsR0FBc0IsR0FBR0wsRUFBUUUsT0FBT0csRUFBTyxNQUFNQSxFQUFPLE1BQU1BLEVBQU8sUUFFN0Y1QixLQUFLQyxPQUFTc0IsRUFBUXRCLE9BRXRCRCxLQUFLNkIsb0JBQW9CN0IsS0FBSzhCLFdBQVdyQyxLQUFLTyxNQUNoRCxDQUVROEIsV0FBV0MsRUFBWUMsR0FDN0I1QyxFQUFNLGVBQWdCLENBQUMyQyxFQUFLRSxVQUFVLEdBQUlGLEVBQUtFLFVBQVUsR0FBSUYsRUFBS0UsVUFBVSxLQUM1RSxNQUFNQyxFQUFTSCxFQUFtQkksV0FDbENuQyxLQUFLQyxPQUFPbUMsY0FBY0wsRUFBS0UsVUFBVSxHQUFJRixFQUFLRSxVQUFVLEdBQUlGLEVBQUtFLFVBQVUsSUFDNUU5QixNQUFNa0MsSUFDTCxNQUFNQyxFQUFPLElBQUlDLEtBQUssQ0FBQ0YsSUFDakJHLEVBQVd6QyxJQUFJMEMsZ0JBQWdCSCxHQUNyQ0osRUFBTVEsSUFBTUYsQ0FDTixJQUVQRyxPQUFPQyxJQUNOeEQsRUFBTXdELEdBQ05iLEVBQUtjLFNBQVNDLEVBQUEsUUFBZ0IsR0FFcEMsQ0FFQUMsa0JBRUEsRSwwU0N6Q2EsYSx5Q0FDYixNQUFNQyxFQUFPLElBQUl0RCxFQUFLLENBQ3BCK0IsSUFBSyw0Q0FHUCxhQURNdUIsRUFBSzlDLE9BQ0osSUFBSStDLEVBQUEsRUFBSSxDQUNiQyxPQUFRLE1BQ1JDLE9BQVEsQ0FDTixJQUFJQyxFQUFBLEVBQVUsQ0FDWkMsT0FBUSxJQUFJQyxFQUFBLElBRWQsSUFBSUYsRUFBQSxFQUFVLENBQ1pDLE9BQVEsSUFBSS9CLEVBQWlCMEIsRUFBS3RDLFVBQVUsYUFHaEQ2QyxLQUFNLElBQUlDLEVBQUEsR0FBSyxDQUNiQyxRQUFRLFFBQVcsRUFBRSxVQUFXLFlBQ2hDQyxLQUFNLE1BR1osRyIsInNvdXJjZXMiOlsid2VicGFjazovL29sLWdwa2cvLi9zcmMvZGVidWcudHMiLCJ3ZWJwYWNrOi8vb2wtZ3BrZy8uL3NyYy9nZW9wYWNrYWdlLnRzIiwid2VicGFjazovL29sLWdwa2cvLi9zcmMvZ3BrZy1yYXN0ZXItc291cmNlLnRzIiwid2VicGFjazovL29sLWdwa2cvLi9leGFtcGxlcy9jb2RlL1N0TG91aXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBPTF9HUEtHX0RFQlVHOiBzdHJpbmc7XG5jb25zdCBkZWJ1Z0VuYWJsZWQgPSAodHlwZW9mIE9MX0dQS0dfREVCVUcgIT09ICd1bmRlZmluZWQnICYmIE9MX0dQS0dfREVCVUcpIHx8XG4gICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3M/LmVudj8uT0xfR1BLR19ERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYuT0xfR1BLR19ERUJVRyk7XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IGRlYnVnRW5hYmxlZCA/IGNvbnNvbGUuZGVidWcuYmluZChjb25zb2xlKSA6ICgpID0+IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IFNRTGl0ZUhUVFBQb29sLCBWRlNIVFRQIH0gZnJvbSAnc3FsaXRlLXdhc20taHR0cCc7XG5cbmltcG9ydCAqIGFzIENvbWxpbmsgZnJvbSAnY29tbGluayc7XG5pbXBvcnQgR1BLR1dvcmtlckludGVyZmFjZSwgeyBHUEtHUmFzdGVyTWV0YWRhdGEgfSBmcm9tICcuL3dvcmtlci5qcyc7XG5cbmltcG9ydCB7IE9wdGlvbnMgYXMgSW1hZ2VUaWxlT3B0aW9ucyB9IGZyb20gJ29sL3NvdXJjZS9UaWxlSW1hZ2UuanMnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBWZWN0b3JUaWxlT3B0aW9ucyB9IGZyb20gJ29sL3NvdXJjZS9WZWN0b3JUaWxlLmpzJztcbmltcG9ydCB7IGdldCBhcyBnZXRQcm9qZWN0aW9uLCB0cmFuc2Zvcm1FeHRlbnQgfSBmcm9tICdvbC9wcm9qLmpzJztcbmltcG9ydCB7IGdldFdpZHRoIH0gZnJvbSAnb2wvZXh0ZW50LmpzJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVYWVogfSBmcm9tICdvbC90aWxlZ3JpZC5qcyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4vZGVidWcuanMnO1xuaW1wb3J0IHsgVGlsZU1hdHJpeCB9IGZyb20gJ0BuZ2FnZW9pbnQvZ2VvcGFja2FnZSc7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBHUEtHUmFzdGVyU291cmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR1BLR1Jhc3Rlck9wdGlvbnMgZXh0ZW5kcyBJbWFnZVRpbGVPcHRpb25zIHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgbGF5ZXIgbmFtZXMgdG8gc2VsZWN0aXZlbHkgaW5jbHVkZSwgQGRlZmF1bHQgZXZlcnl0aGluZ1xuICAgKi9cbiAgbGF5ZXJzPzogc3RyaW5nW107XG5cbiAgdGlsZVVybEZ1bmN0aW9uPzogbmV2ZXI7XG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBuZXZlcjtcblxuICAvKipcbiAgICogQWx0ZXJuYXRpdmUgbWV0aG9kIG9mIHNwZWNpZnlpbmcgbWluWm9vbSwgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggdGlsZUdyaWQsIHJlcXVpcmVzIGV4cGxpY2l0IHByb2plY3Rpb25cbiAgICovXG4gIG1pblpvb20/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsdGVybmF0aXZlIG1ldGhvZCBvZiBzcGVjaWZ5aW5nIG1pblpvb20sIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHRpbGVHcmlkLCByZXF1aXJlcyBleHBsaWNpdCBwcm9qZWN0aW9uXG4gICAqL1xuICBtYXhab29tPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCB0aWxlIGdyaWQsIHJlZmVyIHRvIHRoZSBPcGVubGF5ZXJzIG1hbnVhbFxuICAgKi9cbiAgdGlsZUdyaWQ/OiBUaWxlR3JpZDtcblxuICAvKipcbiAgICogR1BLRyB3b3JrZXJcbiAgICovXG4gIHdvcmtlcjogdHlwZW9mIEdQS0dXb3JrZXJJbnRlcmZhY2U7XG59XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgY3JlYXRpbmcgYSBHUEtHVmVjdG9yU291cmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR1BLR1ZlY3Rvck9wdGlvbnMgZXh0ZW5kcyBWZWN0b3JUaWxlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIGxheWVyIG5hbWVzIHRvIHNlbGVjdGl2ZWx5IGluY2x1ZGUsIEBkZWZhdWx0IGV2ZXJ5dGhpbmdcbiAgICovXG4gIGxheWVycz86IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBhbHJlYWR5IG9wZW4gU1FMaXRlSFRUUCBwb29sIChtdXR1YWxseSBleGNsdXNpdmUgd2l0aCB1cmwpXG4gICAqL1xuICBwb29sPzogUHJvbWlzZTxTUUxpdGVIVFRQUG9vbD47XG5cbiAgdGlsZVVybEZ1bmN0aW9uPzogbmV2ZXI7XG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBuZXZlcjtcbiAgZm9ybWF0PzogbmV2ZXI7XG59XG5cbi8qKlxuICogU2hhcmVkIG9wdGlvbnMgZm9yIGFsbCBNQlRpbGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU1FMT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVUkwgb2YgdGhlIHJlbW90ZSBNQlRpbGVzIHNvdXJjZVxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgcGFyYWxsZWwgd29ya2VycyB0byB1c2UgZm9yIHJldHJpZXZpbmcgdGlsZXMsIEBkZWZhdWx0IDRcbiAgICovXG4gIHNxbFdvcmtlcnM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZXhwZWN0ZWQgcGFnZSBzaXplIGluIGJ5dGVzIGZvciBTUUxpdGUzIGZpbGVzLCBAZGVmYXVsdCA0MDk2XG4gICAqL1xuICBtYXhTcWxQYWdlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogTWVtb3J5IHRvIHVzZSBmb3IgU1FMaXRlIGNhY2hlIGluIEtCLCBAZGVmYXVsdCA0MDk2XG4gICAqL1xuICBzcWxDYWNoZVNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEdQS0dPcHRpb25zID0gR1BLR1ZlY3Rvck9wdGlvbnMgfCBHUEtHUmFzdGVyT3B0aW9ucztcblxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBQb29sT3B0aW9ucyhvcHRpb25zPzogU1FMT3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIHdvcmtlcnM6IG9wdGlvbnM/LnNxbFdvcmtlcnMgPz8gNCxcbiAgICBodHRwT3B0aW9uczoge1xuICAgICAgbWF4UGFnZVNpemU6IG9wdGlvbnM/Lm1heFNxbFBhZ2VTaXplID8/IDQwOTYsXG4gICAgICBjYWNoZVNpemU6IG9wdGlvbnM/LnNxbENhY2hlU2l6ZSA/PyA0MDk2XG4gICAgfSBhcyBWRlNIVFRQLk9wdGlvbnMsXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBHUEtHIHtcbiAgcHJpdmF0ZSB3b3JrZXI6IHR5cGVvZiBHUEtHV29ya2VySW50ZXJmYWNlO1xuICBvcHQ6IFNRTE9wdGlvbnM7XG4gIG1ldGFkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob3B0OiBTUUxPcHRpb25zKSB7XG4gICAgY29uc3QgdyA9IG5ldyBXb3JrZXIobmV3IFVSTCgnLi93b3JrZXIuanMnLCBpbXBvcnQubWV0YS51cmwpKTtcbiAgICB0aGlzLm9wdCA9IG9wdDtcbiAgICB0aGlzLndvcmtlciA9IENvbWxpbmsud3JhcCh3KSBhcyB0eXBlb2YgR1BLR1dvcmtlckludGVyZmFjZTtcbiAgfVxuXG4gIG9wZW4oKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgcmV0dXJuIHRoaXMud29ya2VyLm9wZW4odGhpcy5vcHQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRhZGF0YSA9IHsgcmFzdGVyczogZGF0YS5yYXN0ZXJzLCB2ZWN0b3JzOiBbXSB9O1xuICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYXN0ZXIoaWQ6IHN0cmluZyk6IEdQS0dSYXN0ZXJPcHRpb25zIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgd29ya2VyOiB0aGlzLndvcmtlclxuICAgIH0gYXMgR1BLR1Jhc3Rlck9wdGlvbnM7XG5cbiAgICBjb25zdCBtZCA9IHRoaXMubWV0YWRhdGEucmFzdGVyc1tpZF0gYXMgR1BLR1Jhc3Rlck1ldGFkYXRhO1xuICAgIGlmICghbWQpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmFzdGVyICR7aWR9YCk7XG5cbiAgICBvcHRzLnByb2plY3Rpb24gPSBtZC5zcnM7XG4gICAgb3B0cy5taW5ab29tID0gbWQubWluWm9vbTtcbiAgICBvcHRzLnRpbGVHcmlkID0gbmV3IFRpbGVHcmlkKHtcbiAgICAgIGV4dGVudDogbWQuZXh0ZW50LFxuICAgICAgbWluWm9vbTogbWQubWluWm9vbSxcbiAgICAgIHJlc29sdXRpb25zOiBtZC5yZXNvbHV0aW9uc1xuICAgIH0pO1xuXG4gICAgZGVidWcoJ2dldFJhc3RlcicsIG9wdHMpO1xuICAgIHJldHVybiBvcHRzO1xuICB9XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZVNRTGl0ZUhUVFBQb29sLCBTUUxpdGVIVFRQUG9vbCB9IGZyb20gJ3NxbGl0ZS13YXNtLWh0dHAnO1xuXG5pbXBvcnQgSW1hZ2VUaWxlU291cmNlIGZyb20gJ29sL3NvdXJjZS9UaWxlSW1hZ2UuanMnO1xuaW1wb3J0IFRpbGUgZnJvbSAnb2wvVGlsZS5qcyc7XG5pbXBvcnQgSW1hZ2VUaWxlIGZyb20gJ29sL0ltYWdlVGlsZS5qcyc7XG5pbXBvcnQgeyBUaWxlQ29vcmQgfSBmcm9tICdvbC90aWxlY29vcmQuanMnO1xuaW1wb3J0IFRpbGVTdGF0ZSBmcm9tICdvbC9UaWxlU3RhdGUuanMnO1xuXG5pbXBvcnQgeyBHUEtHUmFzdGVyT3B0aW9ucyB9IGZyb20gJy4vZ2VvcGFja2FnZS5qcyc7XG5pbXBvcnQgR1BLR1dvcmtlckludGVyZmFjZSBmcm9tICcuL3dvcmtlci5qcyc7XG5pbXBvcnQgeyBkZWJ1ZyB9IGZyb20gJy4vZGVidWcuanMnO1xuXG4vKipcbiAqIEEgdGlsZSBzb3VyY2UgaW4gYSByZW1vdGUgLmdwa2cgZmlsZSBhY2Nlc3NpYmxlIGJ5IEhUVFBcbiAqL1xuZXhwb3J0IGNsYXNzIEdQS0dSYXN0ZXJTb3VyY2UgZXh0ZW5kcyBJbWFnZVRpbGVTb3VyY2Uge1xuICBwcml2YXRlIHdvcmtlcjogdHlwZW9mIEdQS0dXb3JrZXJJbnRlcmZhY2U7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7R1BLR1Jhc3Rlck9wdGlvbnN9IG9wdGlvbnMgb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogR1BLR1Jhc3Rlck9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsOiB1bmRlZmluZWQsXG4gICAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIHRvIHByZXZlbnQgT3BlbmxheWVycycgY2FjaGUgZnJvbSB0aGlua2luZyB0aGF0IGFsbCB0aWxlcyBzaGFyZSB0aGUgc2FtZSBVUkxcbiAgICAgIHRpbGVVcmxGdW5jdGlvbjogKGNvb3JkczogVGlsZUNvb3JkKSA9PiBgJHtvcHRpb25zLnVybH0jJHtjb29yZHNbMF19OiR7Y29vcmRzWzFdfToke2Nvb3Jkc1syXX1gXG4gICAgfSk7XG4gICAgdGhpcy53b3JrZXIgPSBvcHRpb25zLndvcmtlcjtcblxuICAgIHRoaXMuc2V0VGlsZUxvYWRGdW5jdGlvbih0aGlzLnRpbGVMb2FkZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIHRpbGVMb2FkZXIodGlsZTogVGlsZSwgX3VybDogc3RyaW5nKSB7XG4gICAgZGVidWcoJ2xvYWRpbmcgdGlsZScsIFt0aWxlLnRpbGVDb29yZFswXSwgdGlsZS50aWxlQ29vcmRbMV0sIHRpbGUudGlsZUNvb3JkWzJdXSk7XG4gICAgY29uc3QgaW1hZ2UgPSAodGlsZSBhcyBJbWFnZVRpbGUpLmdldEltYWdlKCkgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICB0aGlzLndvcmtlci5nZXRSYXN0ZXJUaWxlKHRpbGUudGlsZUNvb3JkWzBdLCB0aWxlLnRpbGVDb29yZFsxXSwgdGlsZS50aWxlQ29vcmRbMl0pXG4gICAgICAudGhlbigocikgPT4ge1xuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3JdKTtcbiAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBkZWJ1ZyhlKTtcbiAgICAgICAgdGlsZS5zZXRTdGF0ZShUaWxlU3RhdGUuRVJST1IpO1xuICAgICAgfSk7XG4gIH1cblxuICBkaXNwb3NlSW50ZXJuYWwoKSB7XG4gICAgLy9yZXR1cm4gdGhpcy5wb29sLnRoZW4oKHApID0+IHAuY2xvc2UoKSk7XG4gIH1cbn1cbiIsImltcG9ydCBNYXAgZnJvbSAnb2wvTWFwLmpzJztcbmltcG9ydCBPU00gZnJvbSAnb2wvc291cmNlL09TTS5qcyc7XG5pbXBvcnQgVGlsZUxheWVyIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldy5qcyc7XG5pbXBvcnQgVGlsZURlYnVnIGZyb20gJ29sL3NvdXJjZS9UaWxlRGVidWcuanMnO1xuaW1wb3J0IHsgZnJvbUxvbkxhdCB9IGZyb20gJ29sL3Byb2ouanMnO1xuXG5pbXBvcnQgeyBHUEtHUmFzdGVyU291cmNlIH0gZnJvbSAnLi4vLi4vc3JjL2luZGV4LmpzJztcbmltcG9ydCB7IEdQS0cgfSBmcm9tICcuLi8uLi9zcmMvZ2VvcGFja2FnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ3BrZyA9IG5ldyBHUEtHKHtcbiAgICB1cmw6ICdodHRwczovL3ZlbGl2b2xlLmItY2RuLm5ldC9TdExvdWlzLmdwa2cnXG4gIH0pO1xuICBhd2FpdCBncGtnLm9wZW4oKTtcbiAgcmV0dXJuIG5ldyBNYXAoe1xuICAgIHRhcmdldDogJ21hcCcsXG4gICAgbGF5ZXJzOiBbXG4gICAgICBuZXcgVGlsZUxheWVyKHtcbiAgICAgICAgc291cmNlOiBuZXcgVGlsZURlYnVnKClcbiAgICAgIH0pLFxuICAgICAgbmV3IFRpbGVMYXllcih7XG4gICAgICAgIHNvdXJjZTogbmV3IEdQS0dSYXN0ZXJTb3VyY2UoZ3BrZy5nZXRSYXN0ZXIoJ3RpbGVzJykpXG4gICAgICB9KVxuICAgIF0sXG4gICAgdmlldzogbmV3IFZpZXcoe1xuICAgICAgY2VudGVyOiBmcm9tTG9uTGF0KFstOTAuMTkwMzQ2LCAzOC42MjAzMzNdKSxcbiAgICAgIHpvb206IDE1XG4gICAgfSksXG4gIH0pO1xufSJdLCJuYW1lcyI6WyJkZWJ1ZyIsInByb2Nlc3MiLCJlbnYiLCJPTF9HUEtHX0RFQlVHIiwiY29uc29sZSIsImJpbmQiLCJHUEtHIiwiY29uc3RydWN0b3IiLCJvcHQiLCJ3IiwiV29ya2VyIiwiVVJMIiwidGhpcyIsIndvcmtlciIsIm9wZW4iLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsImVycm9yIiwibWV0YWRhdGEiLCJyYXN0ZXJzIiwidmVjdG9ycyIsImdldFJhc3RlciIsImlkIiwib3B0cyIsIm1kIiwiRXJyb3IiLCJwcm9qZWN0aW9uIiwic3JzIiwibWluWm9vbSIsInRpbGVHcmlkIiwiVGlsZUdyaWQiLCJleHRlbnQiLCJyZXNvbHV0aW9ucyIsIkdQS0dSYXN0ZXJTb3VyY2UiLCJvcHRpb25zIiwic3VwZXIiLCJ1cmwiLCJ1bmRlZmluZWQiLCJ0aWxlVXJsRnVuY3Rpb24iLCJjb29yZHMiLCJzZXRUaWxlTG9hZEZ1bmN0aW9uIiwidGlsZUxvYWRlciIsInRpbGUiLCJfdXJsIiwidGlsZUNvb3JkIiwiaW1hZ2UiLCJnZXRJbWFnZSIsImdldFJhc3RlclRpbGUiLCJyIiwiYmxvYiIsIkJsb2IiLCJpbWFnZVVybCIsImNyZWF0ZU9iamVjdFVSTCIsInNyYyIsImNhdGNoIiwiZSIsInNldFN0YXRlIiwiVGlsZVN0YXRlIiwiZGlzcG9zZUludGVybmFsIiwiZ3BrZyIsIk1hcCIsInRhcmdldCIsImxheWVycyIsIlRpbGUiLCJzb3VyY2UiLCJUaWxlRGVidWciLCJ2aWV3IiwiVmlldyIsImNlbnRlciIsInpvb20iXSwic291cmNlUm9vdCI6IiJ9