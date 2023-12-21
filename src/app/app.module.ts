import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,
    SunlightZoneComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
