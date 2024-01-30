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
import { CreditsComponent } from './credits/credits.component';
import { StarsComponent } from './stars/stars.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { SunlightZoneBgComponent } from './sunlight-zone-bg/sunlight-zone-bg.component';
import { ProjectsToolBarComponent } from './projects/projects-tool-bar/projects-tool-bar.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { FenchantedComponent } from './projects/fenchanted/fenchanted.component';
import { AmioreComponent } from './projects/amiore/amiore.component';
import { WhisperFromDeepSeaComponent } from './projects/whisper-from-deep-sea/whisper-from-deep-sea.component';
import { MoreSunlightComponent } from './projects/more-sunlight/more-sunlight.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,
    SunlightZoneComponent,
    ToolBarComponent,
    CreditsComponent,
    StarsComponent,
    BubblesComponent,
    SunlightZoneBgComponent,
    ProjectsToolBarComponent,
    TimeLineComponent,
    FenchantedComponent,
    AmioreComponent,
    WhisperFromDeepSeaComponent,
    MoreSunlightComponent
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
