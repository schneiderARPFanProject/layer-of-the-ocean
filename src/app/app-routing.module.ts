import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';
import { GalleriesComponent } from './galleries/galleries.component';

const routes: Routes = [
  { path: 'sunlight', component: SunlightZoneComponent },
  { path: ':level/galleries', component: GalleriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
