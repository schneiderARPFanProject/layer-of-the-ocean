import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GalleriesMessage } from '../../galleries/galleries-message';
import { MESSAGE_URL, GALLERY_IMG_URL } from '../../app.properties';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessages(level: string): Observable<GalleriesMessage[]> {
    const messageUrl = MESSAGE_URL[level];
    const galleriesMessages: GalleriesMessage[] = [];
    this.httpClient.request('GET', messageUrl, {responseType: 'text'}).subscribe(data => {
      const dataArr = data.split(/\r\n|\n/);
      for (let i=1; i<dataArr.length; i++) {
        let record = (<string>dataArr[i]).split(',');
        let imgId = record[2].trim().split('=').slice(1).join();
        let message = record.slice(3).join().replace(/^"(.+)"$/,'$1');
        let galleriesMessage: GalleriesMessage = {
          postedDate: record[0].trim(),
          name: record[1].trim(),
          imgUrl: imgId ? GALLERY_IMG_URL.replace('${imgId}', imgId) : '',
          message: message,
          dear: ''
        }
        galleriesMessages.push(galleriesMessage);
      }
    });
    return of(galleriesMessages);
  }
}
