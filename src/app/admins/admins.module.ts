import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { NavcompComponent } from '../navcomp/navcomp.component';
import { MoviesPanelComponent } from '../movies-panel/movies-panel.component';
import { CastsPanelComponent } from '../casts-panel/casts-panel.component';
import { MoviesCastsComponent } from '../movies-casts/movies-casts.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CastViewComponent } from './cast-view/cast-view.component';
import { MovieViewComponent } from './movie-view/movie-view.component';


//any module you wanna use in lazy loaded module's component, you have to imports it to the corresponding component module.

@NgModule({
  declarations: [
    AdminsComponent,
    NavcompComponent,
    MoviesPanelComponent,
    CastsPanelComponent,
    MoviesCastsComponent,
    CastViewComponent,
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminsModule { }
