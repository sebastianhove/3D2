import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThreedeeComponent } from './threedee/threedee.component';
import { HomeComponent } from './home/home.component';
import { EngineComponent } from './engine/engine.component';
import { SphereComponent } from './sphere/sphere.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThreedeeComponent,
    HomeComponent,
    EngineComponent,
    SphereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
