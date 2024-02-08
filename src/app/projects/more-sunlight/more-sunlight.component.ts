import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-more-sunlight',
  templateUrl: './more-sunlight.component.html',
  styleUrl: './more-sunlight.component.css',
  animations: [
  trigger(
    'animation', [
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
export class MoreSunlightComponent extends BaseProject{
  constructor(route: ActivatedRoute) {
    super(route)
    this.projectName = 'more'
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.level = 'sunlight';
  }
}
