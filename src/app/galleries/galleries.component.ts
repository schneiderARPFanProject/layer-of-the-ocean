import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { animate, style, transition, trigger } from '@angular/animations';
import { GalleriesMessage } from '../galleries/galleries-message';
import { MessageService } from '../galleries/services/message.service';
import { MAX_COUNT_PER_PAGE } from '../app.properties';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrl: './galleries.component.css',
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1}))
      ]),
      transition('visible => void', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class GalleriesComponent {
  galleriesMessages: GalleriesMessage[] = [];
  galleriesMessagesPage: GalleriesMessage[] = [];
  messageCount: number = 0;
  pageCountArr: number[] = [];
  pageCount: number = 1;
  currentPage: number = 0;
  //showPreview: boolean = false;
  //lightBoxImageUrl: string = "";

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
    console.log("get galleries of", this.level);
    this.messageService.getMessages(this.level!).subscribe(
      messages => {
        this.galleriesMessages = messages;
        //console.log(this.galleriesMessages);
        //console.log(this.galleriesMessages.length);
        this.pageCount = Math.ceil(this.galleriesMessages.length/MAX_COUNT_PER_PAGE);
        this.pageCountArr = Array(this.pageCount).fill(0).map((x,i)=>i);
        this.selectGalleriesPage(0);
        this.showMessageCount(this.galleriesMessages.length);
      }
    );
  }

  selectGalleriesPage(selectedPage: number) {
    this.currentPage = selectedPage;

    let minIndex = selectedPage * MAX_COUNT_PER_PAGE;
    let maxIndex = (selectedPage + 1) * MAX_COUNT_PER_PAGE;
    this.galleriesMessagesPage = this.galleriesMessages.slice(minIndex, maxIndex);
  }

  showMessageCount(totalCount: number) {
    let startNum: number = Math.max(totalCount-70, 0);
    this.counting(startNum, totalCount);
  }

  private counting(curNum: number, endNum: number) {
    if (curNum <= endNum) {
      this.messageCount = curNum;
      setTimeout(() => { //Delay a bit before calling the function again.
        this.counting(curNum + 1, endNum);
      }, 10);
    }
  }

//  onPreviewImage(imgUrl: string): void {
//    this.showPreview = true;
//    this.lightBoxImageUrl = imgUrl;
//  }

//  onClosePreview(): void {
//    this.showPreview = false;
//    this.lightBoxImageUrl = "";
//  }
}
