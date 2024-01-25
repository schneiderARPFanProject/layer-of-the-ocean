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

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  ngOnInit(): void {
    console.log("start app.oninit)");/* TODO?
    Promise.all(Array.from(document.images).map(img => {
      console.log(img);
      if (img.complete)
          return Promise.resolve(img.naturalHeight !== 0);
      return new Promise(resolve => {
          img.addEventListener('load', () => resolve(true));
          img.addEventListener('error', () => {console.log('err');resolve(false)});
      });
    })).then(results => {
        console.log(results);
        if (results.every(res => res)) {
            console.log('all images loaded successfully');
        }
        else
            console.log('some images failed to load, all finished loading');
    });*/
    console.log("end app.oninit)");
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
