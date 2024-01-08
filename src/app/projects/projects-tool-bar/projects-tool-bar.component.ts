import { Component, Input } from '@angular/core'
import { PROJECT_LIST, PROJECT_NAME_LIST } from '../../app.properties';

@Component({
  selector: 'app-projects-tool-bar',
  templateUrl: './projects-tool-bar.component.html',
  styleUrl: './projects-tool-bar.component.css'
})
export class ProjectsToolBarComponent {
  @Input() level?: string;
  @Input() currentProject?: string;
  projectList: string[] = [];
  projectNameList: Record<string, string> = {};

  ngOnInit(): void {
    this.projectList = PROJECT_LIST[this.level!];
    this.projectNameList = PROJECT_NAME_LIST;
  }
}
