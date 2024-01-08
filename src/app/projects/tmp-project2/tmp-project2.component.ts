import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
  selector: 'app-tmp-project2',
  templateUrl: './tmp-project2.component.html',
  styleUrl: './tmp-project2.component.css'
})
export class TmpProject2Component extends BaseProject {
  constructor(route: ActivatedRoute) {
    super(route);
    this.projectName = 'tmp-project2';
  }
}
