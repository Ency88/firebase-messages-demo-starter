import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public messages = [
    { text: 'Hi'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'},
    { text: 'Hi!!!'}
  ];

  send(value) {
    this.messages.push({ text: value });
  }
}
