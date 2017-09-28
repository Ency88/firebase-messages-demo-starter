import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Input()
  public messages: any[];

  constructor() { }

  ngOnInit() {
  }

}
