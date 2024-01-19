
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
selector: 'app-amiore',
templateUrl: './amiore.component.html',
styleUrl: './amiore.component.css'
})
export class AmioreComponent extends BaseProject {
constructor(route: ActivatedRoute) {
    super(route);
    this.projectName = 'amiore';
  }
}
