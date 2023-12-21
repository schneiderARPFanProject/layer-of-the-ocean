import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { animate, style, transition, trigger } from '@angular/animations';
import { GalleriesMessage } from '../galleries/galleries-message';
import { MessageService } from '../galleries/services/message.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('100ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('100ms', style({transform: 'scale(0.5)'}))
      ])
    ])
  ]
})
export class GalleriesComponent {
  galleriesMessages: GalleriesMessage[] = [];
  showPreview: boolean = false;
  lightBoxImageUrl: string = "";

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

  onPreviewImage(imgUrl: string): void {
    this.showPreview = true;
    this.lightBoxImageUrl = imgUrl;
  }

  onClosePreview(): void {
    this.showPreview = false;
    this.lightBoxImageUrl = "";
  }
}
