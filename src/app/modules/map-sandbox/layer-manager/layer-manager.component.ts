import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { faXmark, faCircle, faWaveSquare, faDrawPolygon, faUpload } from '@fortawesome/free-solid-svg-icons';
import { layerHandler, layerHandlerPositionning } from '@modules/map-sandbox/shared/core';

import Map from 'ol/Map';
import { MapService } from '@services/map.service';
import { Subscription } from 'rxjs';

import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import WKT from 'ol/format/WKT';

@Component({
  selector: 'app-layer-manager',
  templateUrl: './layer-manager.component.html',
  styleUrls: ['./layer-manager.component.scss']
})
export class LayerManagerComponent implements OnInit, OnDestroy {
  @Input() map!: Map;
  @Input() currentEpsg!: string;

  @Output() layerSelected = new EventEmitter<layerHandler|null>();

  @ViewChild('exportStringGeomDiv') exportStringGeomDiv!: ElementRef;
  @ViewChild('layersListDiv') layersListDiv!: ElementRef;

  disabledIcon = faXmark;
  pointIcon = faCircle;
  lineStringIcon = faWaveSquare;
  polygonIcon = faDrawPolygon;
  loadIcon = faUpload;


  existingLayers: any[] = [];
  // existingLayers: any[] = []; // LayerHandler or GroupHandler list
  layerIdSelected!: string;
  currentLayer!: layerHandler;
  layerNamedIncrement: number = -1;
  createModesSupported = [
    {
      "mode": 'Point',
      "label": 'Ajouter une couche de Points',
      "icon": this.pointIcon
    },
    {
      "mode": 'LineString',
      "label": 'Ajouter une couche de LineString',
      "icon": this.lineStringIcon
    },
    {
      "mode": 'Polygon',
      "label": 'Ajouter une couche de Polygones',
      "icon": this.polygonIcon
    }
  ]

  createFromModesSupported = [
    {
      "mode": 'GeoJSON',
      "label": 'Importer un GeoJSON',
      "label_text": "GeoJSON",
      "icon": this.loadIcon
    },
    {
      "mode": 'WKT',
      "label": 'Importer un/des WKT(s)',
      "label_text": "WKT(s)",
      "icon": this.loadIcon
    },
  ]
  importDataType!: string;
  strInputDataValues: string | null = null;
  strInputEpsgInput: string | null = null;
  modeImportInput: string = 'new';
  epsgAvailable = ["EPSG:4326", "EPSG:3857"]; // TODO refactor go to layout because shared with geoInfo comp

  epsgChangesSubscription!: Subscription;

  constructor(
    private mapService: MapService,
  ) {

    this.epsgChangesSubscription = this.mapService.setMapProjectionFromEpsg.subscribe(
      (epsg: string) => {
        this.existingLayers.forEach((layer: layerHandler) => {
          layer.features().forEach( (feature: any) => {
            feature.setGeometry(feature.getGeometry().transform(this.currentEpsg, epsg))
          });
        })

        this.currentEpsg = epsg;
      }
    )

   }

  ngOnInit(): void {
    this.moveImportDataModalToBody()
  }

  ngOnDestroy(): void {

    this.existingLayers.forEach((layer: any) => {
      this.map.removeLayer(layer.vectorLayer)
      layer.cleanEvents()
    })

  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.layersListDiv) {
      this.refreshLayers()
    }
  }

  addLayer(geomType: any, groupId: string | null = null): void {
    const layerNo: number = ++this.layerNamedIncrement
    let newLayer = new layerHandler(
      this.map,
      'layer ' + layerNo,
      geomType,
      layerNo, // Zindex
      groupId
    )
    this.existingLayers.push(newLayer)
    this.refreshLayers()

  }

  duplicateLayer(layer: layerHandler): void {
    const layerNo: number = this.existingLayers.length
    let newLayer = new layerHandler(
      this.map,
      layer.layerName + " copy",
      layer.geomType,
      layerNo, // Zindex
      null
    )
    // copy the feature from the current feature selecte to duplicate
    newLayer.addFeaturesAndUpdateIds(layer.features())
    this.existingLayers.push(newLayer)
    this.refreshLayers()
  }

  addLayerFromFeatures(geomType: 'Point' | 'LineString' | 'Polygon', features: any[]): void {
    // TODO verify if geomType and features geom type match
    const layerNo: number = ++this.layerNamedIncrement
    let newLayer = new layerHandler(
      this.map,
      'layer ' + layerNo,
      geomType,
      layerNo, // Zindex
      null
    )
    newLayer.addFeaturesAndUpdateIds(features)
    this.existingLayers.push(newLayer)
    this.refreshLayers()
  }

  layerGoUp(layerId: string): void {
    this.existingLayers = layerHandlerPositionning(this.existingLayers, layerId, 1)
  }

  layerGoDown(layerId: string): void {
    this.existingLayers = layerHandlerPositionning(this.existingLayers, layerId, -1)
  }

  removeLayer(layerId: string): void {
    this.existingLayers = this.existingLayers.filter((layer: layerHandler) => {
      return layer.id !== layerId
    })
    this.buildLayersIndexes()
  }

  getSelectedLayerId(layerId: any): void {
    this.layerIdSelected = layerId
    this.currentLayer = this.getLayerFromId(layerId)

    this.layerSelected.emit(this.currentLayer)
  }

  private getLayerFromId(layerId: string): layerHandler {
    let currentLayer = this.existingLayers.filter((layer: layerHandler) => {
      return layer.id === layerId
    })
    return currentLayer[0]
  }

  refreshLayers(): void {
    this.existingLayers = this.existingLayers.filter((layer: layerHandler) => {
      return !layer.deleted;
    })
  }

  unSelectLayer(): void {
    this.layerIdSelected = 'none'
    this.layerSelected.emit(null)

  }

  buildLayersIndexes(): void {
    let existingLayers = this.existingLayers.sort((a, b) => (a.zIndexValue < b.zIndexValue ? -1 : 1))

    this.existingLayers = []
    existingLayers.forEach((layer: layerHandler, idx: number) => {
      layer.zIndexValue = idx;
      layer.vectorLayer.setZIndex(idx);
      this.existingLayers.push(layer)
    })
  }


  moveImportDataModalToBody(): void {
    // TODO create a global function
    let modalLayerDiv = document.getElementById('modalDataImport');
    if (modalLayerDiv !== null) {

      let bodyDiv = document.body;
      if (bodyDiv !== null) {
        bodyDiv.appendChild(modalLayerDiv)
      }
    }
  }

  setImportDataType(dataType: string): void {
    this.importDataType = dataType;
  }

  importGeoJSON(): void {
    let featureParams = {}
    if (this.strInputEpsgInput !== this.currentEpsg) {
      featureParams = {
        dataProjection: this.strInputEpsgInput,
        featureProjection: this.currentEpsg
      }
    }

    let featuresToAdd: any;

    if (this.strInputDataValues !== null) {
      if (this.importDataType === "GeoJSON") {
        featuresToAdd = readGeoJsonAndGroupedByGeomType(this.strInputDataValues, featureParams)
      } else if (this.importDataType === "WKT(s)") {
        featuresToAdd = readStringWktAndGroupedByGeomType(this.strInputDataValues.split('\n'), featureParams)
      }

      if (this.modeImportInput === 'new') {
        Object.keys(featuresToAdd).forEach((geomType: string) => {
          let features = featuresToAdd[geomType]
          if ('Point' === geomType) {
            this.addLayerFromFeatures(geomType, features)
            // TODO should have thier own properties
          }
          if ('LineString' === geomType) {
            this.addLayerFromFeatures(geomType, features)
          }
          if ('Polygon' === geomType) {
            this.addLayerFromFeatures(geomType, features)
          }
        })
      } else {
        let layerTarget = this.getLayerFromId(this.modeImportInput)
        Object.keys(featuresToAdd).forEach((geomType: string) => {
          let features = featuresToAdd[geomType]
          if (geomType === layerTarget.geomType) {
            layerTarget.addFeaturesAndUpdateIds(features)  // TODO synchronize properties      
            this.refreshLayers()
          }
        })
      }
    }

    this.strInputDataValues = null;
    this.strInputEpsgInput = null;
    this.modeImportInput = 'new';
  }

}

function readGeoJsonAndGroupedByGeomType(geoData: string, featureParams: any): any {
  let featuresGroupedByGeom = {}
  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(JSON.parse(geoData, featureParams))
  });

  const features = vectorSource.getFeatures()
  featuresGroupedByGeom = groupByGeomType(features)
  
  return featuresGroupedByGeom

}

function readStringWktAndGroupedByGeomType(Wkts: string[], featureParams: any): any {
  let featuresGroupedByGeom: any = {}

  Wkts.forEach((wktValue: string) => {
    // POLYGON((10.689 -25.092, 34.595 -20.170, 38.814 -35.639, 13.502 -39.155, 10.689 -25.092))
    let feature!: any;
    try {
      feature = new WKT().readFeature(wktValue, featureParams);
    } catch (error: any) { // TODO catche the expected exception
      alert(error.message)
    }

    if (feature !== undefined) {
      const featureGeom = feature.getGeometry();
      const featureGeomType: string = featureGeom.getType()
      if (!( featureGeomType in featuresGroupedByGeom)) {
        featuresGroupedByGeom[featureGeomType] = []
      }

      if (featureGeom !== undefined) {
        featuresGroupedByGeom[featureGeomType].push(feature)
      }
    }

  })
  return featuresGroupedByGeom
}

function groupByGeomType(objectArray: any[]) {
  return objectArray.reduce((acc: any, obj: any) => {
    let key = obj.getGeometry().getType();
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function groupBy(objectArray: any[], property: any) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}