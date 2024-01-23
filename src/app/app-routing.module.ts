import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigationGuard } from './navigation.guard';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { FenchantedComponent } from './projects/fenchanted/fenchanted.component';
import { AmioreComponent } from './projects/amiore/amiore.component';
import { WhisperFromDeepSeaComponent } from './projects/whisper-from-deep-sea/whisper-from-deep-sea.component';

const routes: Routes = [
  { path: 'sunlight', component: SunlightZoneComponent, canActivate: [navigationGuard] },
  { path: ':level/letters-to-schneider', component: GalleriesComponent, canActivate: [navigationGuard] },
  { path: ':level/schneider-journey', component: TimeLineComponent, canActivate: [navigationGuard] },
  { path: ':level/presents-to-schneider/fenchanted', component: FenchantedComponent, canActivate: [navigationGuard] },
  { path: ':level/presents-to-schneider/amiore', component: AmioreComponent, canActivate: [navigationGuard] },
  { path: ':level/presents-to-schneider/whisper-from-the-deep-sea', component: WhisperFromDeepSeaComponent, canActivate: [navigationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
