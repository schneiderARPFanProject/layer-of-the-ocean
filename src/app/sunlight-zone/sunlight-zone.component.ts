import { Component } from '@angular/core';
import { PROJECT_LIST } from '../app.properties';

@Component({
  selector: 'app-sunlight-zone',
  templateUrl: './sunlight-zone.component.html',
  styleUrl: './sunlight-zone.component.css'
})
export class SunlightZoneComponent {
  level: string = 'sunlight';
  projectList: string[] = [];
  showList: boolean = false;

  ngOnInit(): void {
    this.projectList = PROJECT_LIST[this.level];
  }

  showProjectList(): void {
    this.showList = true;
  }

  closeProjectList(): void {
    this.showList = false;
  }
}
