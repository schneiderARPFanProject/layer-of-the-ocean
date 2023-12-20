import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { LEVEL_DISPLAY_TEXT } from '../app.properties';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  @Input() level?: string;

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  constructor(
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  onBackToTopSelect(): void {
    document.getElementById("layerNav")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }
}
