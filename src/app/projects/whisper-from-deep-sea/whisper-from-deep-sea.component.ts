import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
selector: 'app-whisper-from-deep-sea',
templateUrl: './whisper-from-deep-sea.component.html',
styleUrl: './whisper-from-deep-sea.component.css'
})
export class WhisperFromDeepSeaComponent extends BaseProject {
constructor(route: ActivatedRoute) {
    super(route)
    this.projectName = 'whisper-from-the-deep-sea';
  }
}
