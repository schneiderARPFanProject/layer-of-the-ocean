import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LEVEL_DISPLAY_TEXT } from '../app.properties';
import { CreditsComponent } from '../credits/credits.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {

  @Input() level?: string;
  @Input() sublevel: string = '';
  @Input() showBackToTop: boolean = true;
  @Input() showBack: boolean = true;

  levelDisplayText = LEVEL_DISPLAY_TEXT;

  constructor(
    private location: Location,
    private dialog: MatDialog
  ) {
  }

  goBack(): void {
    this.location.back();
  }

  onBackToTopSelect(): void {
    document.getElementById("oceanBaseBg")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
  }

  onOpenCredits() {
    const dialogRef = this.dialog.open(CreditsComponent, {
      height: "calc(100%)",
      maxHeight: "calc(100%)",
      width: "calc(100%)",
      maxWidth: "calc(100%)",
    });

   /*CreditsComponent dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });*/
  }
}
