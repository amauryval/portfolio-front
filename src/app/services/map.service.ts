import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { apiUrl } from '@core/inputs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapContainer: Subject<any> = new Subject<any>();
  mapContainerScale: Subject<any> = new Subject<any>();

  mapContainerCalled: Subject<boolean> = new Subject<boolean>();
  mapContainerLegendCalled: Subject<boolean> = new Subject<boolean>();
  isMapViewReset: Subject<boolean> = new Subject<boolean>();

  // TODO create a dedicated service
  newPointsSvgLayerName: Subject<string> = new Subject<string>();
  removePointsSvgLayerName: Subject<string> = new Subject<string>();
  newLinesSvgLayerName: Subject<string> = new Subject<string>();
  removeLinesSvgLayerName: Subject<string> = new Subject<string>();
  //

  screenMapBound: Subject<any> = new Subject<any>();

  zoomMapFromBounds: Subject<any> = new Subject<any>();

  newCoords: Subject<number[]> = new Subject<number[]>();

  zoomEvent: Subject<boolean> = new Subject<boolean>();

  mapInteraction: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) { }

  getMapContainer(): void {
    this.mapContainerCalled.next(true);
  }

  getMapContainerForLegend(): void {
    this.mapContainerLegendCalled.next(true);
  }

  resetMapView(): void {
    this.isMapViewReset.next(true)
  }

  sendMapContainer(mapContainer: any): void {
    this.mapContainer.next(mapContainer);
  }

  sendScreenMapBounds(coordsBound: number[]): void {
    this.screenMapBound.next(coordsBound);
  }

  sendZoomMapFromBounds(coordsBound: number[]): void {
    this.zoomMapFromBounds.next(coordsBound);
  }

  sendMapScale(scaleFeatures: any): void {
    this.mapContainerScale.next(scaleFeatures);
  }

  // TODO create a dedicated service
  pullPointsSvgLayerName(layerName: string): void {
    this.newPointsSvgLayerName.next(layerName);
  }
  pullRemovePointsSvgLayerName(layerName: string): void {
    this.removePointsSvgLayerName.next(layerName);
  }
  pullLinesSvgLayerName(layerName: string): void {
    this.newLinesSvgLayerName.next(layerName);
  }
  pullRemoveLinesSvgLayerName(layerName: string): void {
    this.removeLinesSvgLayerName.next(layerName);
  }
  //

  pullMapCoords(coordinates: any): void {
    this.newCoords.next(coordinates);
  }

  sendZoomAction(): void {
    this.zoomEvent.next(true);
  }

  MapInteraction(status: boolean): void {
    this.mapInteraction.next(status);
  }

}


