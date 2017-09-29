import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages;
  private limitSubject = new Subject<Number>();

  constructor(private af: AngularFireDatabase) {
    this.messages  = af.list('/messages', {
      query: {
        limitToLast: this.limitSubject
      }
    });
  }

  send(value) {
    this.messages.push({ text: value });
  }

  changeLimit(value) {
    console.log(value);
    this.limitSubject.next(parseInt(value, 10));
  }
}
