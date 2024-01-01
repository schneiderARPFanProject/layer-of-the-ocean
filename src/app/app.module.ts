import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { TmpProject1Component } from './projects/tmp-project1/tmp-project1.component';
import { TmpProject2Component } from './projects/tmp-project2/tmp-project2.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,
    SunlightZoneComponent,
    ToolBarComponent,
    TmpProject1Component,
    TmpProject2Component,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
