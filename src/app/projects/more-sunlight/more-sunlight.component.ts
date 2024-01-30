import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseProject } from '../base-project.service';

@Component({
  selector: 'app-more-sunlight',
  templateUrl: './more-sunlight.component.html',
  styleUrl: './more-sunlight.component.css'
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
