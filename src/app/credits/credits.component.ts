import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.css'
})
export class CreditsComponent {

  constructor(private dialogRef: MatDialogRef<CreditsComponent>) {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
