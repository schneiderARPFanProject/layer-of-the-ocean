import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { GalleriesMessage } from '../galleries/galleries-message';
import { MessageService } from '../galleries/services/message.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.css'
})
export class GalleriesComponent {
  galleriesMessages: GalleriesMessage[] = [];

  @Input() level?: string;

  constructor(
    private messageService: MessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGalleriesMessages();
  }

  getGalleriesMessages(): void {
    this.messageService.getMessages(this.level!).subscribe(messages => this.galleriesMessages = messages);
    console.log("get galleries of", this.level);
  }

  goBack(): void {
    this.location.back();
  }
}
