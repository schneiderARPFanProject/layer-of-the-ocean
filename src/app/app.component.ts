import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { LEVEL_DISPLAY_TEXT } from './app.properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Layer Of The Ocean';
  hoveredLayer: string = '';
  loading: boolean = true;

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  ngOnInit(): void {
    const bar = document.querySelector(".bar");
    setTimeout(() => {
      this.loading = false;
    }, 10000);
  }

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
