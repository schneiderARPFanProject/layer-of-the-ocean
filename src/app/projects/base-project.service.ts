import { Injectable, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PROJECT_NAME_LIST } from '../app.properties';

@Injectable({
  providedIn: 'root'
})
export class BaseProject {
  @Input() level?: string;
  projectNameList: Record<string, string> = {};
  projectName: string = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
    this.projectNameList = PROJECT_NAME_LIST;
  }
}
