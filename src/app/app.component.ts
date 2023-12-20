import { Component } from '@angular/core';
import { LEVEL_DISPLAY_TEXT } from './app.properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Layer Of The Ocean';

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  onLayerSelect(): void {
    console.log("click layer!");
    document.getElementById("layerContentBegin")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
