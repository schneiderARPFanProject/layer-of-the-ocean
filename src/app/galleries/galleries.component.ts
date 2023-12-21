import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
    this.getGalleriesMessages();
  }

  getGalleriesMessages(): void {
    this.messageService.getMessages(this.level!).subscribe(messages => this.galleriesMessages = messages);
    console.log("get galleries of", this.level);
  }
}
