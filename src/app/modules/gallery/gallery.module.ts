import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GalleryRoutingModule } from '@modules/gallery/gallery-routing.module';

import { LayoutComponent } from './layout/layout.component';

import { GalleryService } from '@modules/gallery/shared/services/gallery.service';

import { PipesModule } from '@shared/pipes/pipes.module';
import { GridContainerModule } from '@shared/modules/grid/gallery.module';
import { ItemsModule } from '@shared/modules/items/items.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FontAwesomeModule,
    PipesModule,
    GridContainerModule,
    ItemsModule
  ],
  providers: [
    GalleryService
  ]
})
export class GalleryModule { }
