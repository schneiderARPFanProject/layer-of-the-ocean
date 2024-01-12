import { Component } from '@angular/core';
import { LEVEL_DISPLAY_TEXT } from './app.properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Layer Of The Ocean';
  hoveredLayer: string = '';

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  onLayerSelect(activeLayer: boolean): void {
    /* console.log("click layer!"); */
    if (!activeLayer) return;

    document.getElementById("layerContentBegin")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  layerHover(layer: string): void {
    this.hoveredLayer = layer;
  }

  layerHoverOut(): void {
    this.hoveredLayer = '';
  }
}
