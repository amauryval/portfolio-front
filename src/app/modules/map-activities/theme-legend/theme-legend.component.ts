import { MapActivitiesModule } from './../map-activities.module';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { tagsIcon } from '@core/inputs';

import * as d3 from 'd3';
import { legendActivitiesId, sliderBarId } from '@modules/map-activities/shared/core';


@Component({
  selector: 'app-theme-legend',
  templateUrl: './theme-legend.component.html',
  styleUrls: ['./theme-legend.component.scss']
})
export class ThemeLegendComponent implements OnInit, AfterViewInit {

  sliderBarId = sliderBarId;
  legendActivitiesId = legendActivitiesId;

  widthLegendElement = 200;
  heightLegendElement = 140;
  heightMoveLegendElement = 60;

  tagIcon = tagsIcon;

  fontSize = '19px';
  // activity month legend data
  activityMonthLegendData: any = {
    circleMonthR: [40, 20, 10],
    circleCxPos: 50,
    textXPos: 120
  };

  // activity types legend data
  activityTypesLegendData: any = {
    circleR: 18,
    circleCxPos: 20,
    textXPos: 50,
    circleJobs: [
      { cy: 25, class: 'education', label: 'Formations' },
      { cy: 70, class: 'job', label: 'Entreprises' },
      { cy: 115, class: 'volunteer', label: 'Bénévolat' },
    ]
  };

  // moves legend data
  movesLineLegendData: any = {
    textXPos: 50,
    markerFontSize: '12px',
    moves: [
      { x1: 0, x2: 45, y1: 0, y2: 45 , r: 12,
        classLine: 'train-line',
        classMarker: 'train-marker',
        classMarkerText: 'train-marker-text',
        label: 'Train'
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

}
