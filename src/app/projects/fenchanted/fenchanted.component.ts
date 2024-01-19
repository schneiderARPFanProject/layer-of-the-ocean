import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
selector: 'app-fenchanted',
templateUrl: './fenchanted.component.html',
styleUrl: './fenchanted.component.css'
})
export class FenchantedComponent extends BaseProject {
constructor(route: ActivatedRoute) {
    super(route)
    this.projectName = 'fenchanted';
  }
}
