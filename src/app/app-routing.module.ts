import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunlightZoneComponent } from './sunlight-zone/sunlight-zone.component';

const routes: Routes = [
  { path: 'sunlight', component: SunlightZoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
