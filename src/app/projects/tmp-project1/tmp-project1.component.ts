import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
  selector: 'app-tmp-project1',
  templateUrl: './tmp-project1.component.html',
  styleUrl: './tmp-project1.component.css'
})
export class TmpProject1Component extends BaseProject {
  constructor(route: ActivatedRoute) {
    super(route)
    this.projectName = 'tmp-project1';
  }
}
