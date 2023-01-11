import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CelebBindService } from './services/CelebrityBindingService';
import { MovieService } from './services/MovieService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CastService } from './services/cast-service.service';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { CMService } from './services/CMService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieItemComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CelebBindService,MovieService,CookieService,CastService,MovieService,CMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
