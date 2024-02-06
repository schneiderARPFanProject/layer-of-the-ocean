import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-amiore',
  templateUrl: './amiore.component.html',
  styleUrl: './amiore.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1}))
      ]),
      transition('visible => void', [
        style({opacity: 1}),
        animate('300ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class AmioreComponent extends BaseProject {
  constructor(route: ActivatedRoute) {
    super(route);
    this.projectName = 'amiore';
  }
}
