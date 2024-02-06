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
  showPreview: boolean = false;
  lightBoxImageUrl: string = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
    this.projectNameList = PROJECT_NAME_LIST;
  }

  onPreviewImage(imgUrl: string): void {
    this.showPreview = true;
    this.lightBoxImageUrl = imgUrl;
  }

  onClosePreview(): void {
    this.showPreview = false;
    this.lightBoxImageUrl = "";
  }
}
