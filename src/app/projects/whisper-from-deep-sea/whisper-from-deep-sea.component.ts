import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-whisper-from-deep-sea',
  templateUrl: './whisper-from-deep-sea.component.html',
  styleUrl: './whisper-from-deep-sea.component.css',
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
export class WhisperFromDeepSeaComponent extends BaseProject {
constructor(route: ActivatedRoute) {
    super(route)
    this.projectName = 'whisper-from-the-deep-sea';
  }
}
