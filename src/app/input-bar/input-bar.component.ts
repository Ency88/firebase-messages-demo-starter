import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit {

  @Output()
  public send = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendMessage(inputRef: HTMLInputElement) {
    if (inputRef.value) {
      this.send.emit(inputRef.value);
      inputRef.value = '';
    }
  }
}
