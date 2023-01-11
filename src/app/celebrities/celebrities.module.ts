import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebritiesRoutingModule } from './celebrities-routing.module';
import { CelebritiesComponent } from './celebrities.component';
import { CelebrityComponent } from '../celebrity/celebrity.component';
import { CelebrityDetailsComponent } from '../celebrity-details/celebrity-details.component';


@NgModule({
  declarations: [
    CelebritiesComponent,
    CelebrityComponent,
    CelebrityDetailsComponent
  ],
  imports: [
    CommonModule,
    CelebritiesRoutingModule
  ]
})
export class CelebritiesModule { }
