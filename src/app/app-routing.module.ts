import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TmpProject1Component } from './projects/tmp-project1/tmp-project1.component';
import { TmpProject2Component } from './projects/tmp-project2/tmp-project2.component';

const routes: Routes = [
  { path: 'sunlight', component: SunlightZoneComponent },
  { path: ':level/letters-to-schneider', component: GalleriesComponent },
  { path: ':level/schneider-journey', component: TimeLineComponent },
  { path: ':level/presents-to-schneider/tmp-project1', component: TmpProject1Component },
  { path: ':level/presents-to-schneider/tmp-project2', component: TmpProject2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
