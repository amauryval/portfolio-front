import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EducationRoutingModule } from '@modules/education/education-routing.module';

import { LayoutComponent } from '@modules/education/layout/layout.component';
import { DegreesBarComponent } from '@modules/education/degrees-bar/degrees-bar.component';
import { TrainingsBarComponent } from '@modules/education/trainings-bar/trainings-bar.component';
import { LanguagesBarComponent } from './languages-bar/languages-bar.component';


@NgModule({
  declarations: [
    DegreesBarComponent,
    TrainingsBarComponent,
    LayoutComponent,
    LanguagesBarComponent,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    FontAwesomeModule
  ]
})
export class EducationModule { }
