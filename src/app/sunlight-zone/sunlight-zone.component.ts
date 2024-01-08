import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PROJECT_LIST, PROJECT_NAME_LIST } from '../app.properties';

@Component({
  selector: 'app-sunlight-zone',
  templateUrl: './sunlight-zone.component.html',
  styleUrl: './sunlight-zone.component.css'
})
export class SunlightZoneComponent {
  level: string = 'sunlight';
  projectList: string[] = [];
  projectNameList: Record<string, string> = {};
  showList: boolean = false;
  projectContentX: string = '';
  projectContentY: string = '';

  ngOnInit(): void {
    this.projectList = PROJECT_LIST[this.level];
    this.projectNameList = PROJECT_NAME_LIST;
  }

  showProjectList(e: MouseEvent): void {
    this.showList = true;
    this.projectContentX = e.clientX + 'px';
    this.projectContentY = e.clientY + 'px';
  }

  closeProjectList(): void {
    this.showList = false;
  }
}
