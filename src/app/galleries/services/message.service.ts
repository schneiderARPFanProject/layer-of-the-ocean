import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { GalleriesMessage } from '../../galleries/galleries-message';
import { MESSAGE_URL } from '../../app.properties';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessages(level: string): Observable<GalleriesMessage[]> {
    const messageUrl = MESSAGE_URL[level];
    const result: Subject<GalleriesMessage[]> = new Subject<GalleriesMessage[]>();
    let galleriesMessages: GalleriesMessage[] = [];
    this.httpClient.request('GET', messageUrl, {responseType: 'text'}).subscribe(data => {
      const dataArr = data.split(/\r\n|\n/);
      for (let i=1; i<dataArr.length; i++) {
        let record = (<string>dataArr[i]).split(',');
        //console.log(record);
        let message = record.slice(4).join().replace(/^"(.+)"$/,'$1');
        let galleriesMessage: GalleriesMessage = {
          timestamp: record[0].trim() + record[1].trim(),
          dear: record[2].trim(),
          message: message,
          from: record[3].trim()
        }
        galleriesMessages.push(galleriesMessage);
      }
      result.next(galleriesMessages);
      result.complete();
    });
    return result;
  }
}
