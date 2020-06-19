import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule,MatCardModule,MatIconModule} from '@angular/material';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { StrawberryDetailsComponent } from './strawberry-details/strawberry-details.component';
import { BerrySmoothieComponent } from './berry-smoothie/berry-smoothie.component';
import { ChickenSaladComponent } from './chicken-salad/chicken-salad.component';
import { FruitSaladComponent } from './fruit-salad/fruit-salad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StrawberryDetailsComponent,
    BerrySmoothieComponent,
    ChickenSaladComponent,
    FruitSaladComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
