import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-response',
  templateUrl: './message-response.component.html',
  styleUrls: ['./message-response.component.scss'],
})
export class MessageResponseComponent implements OnInit {

  @Input('message') message;
  constructor() { }

  ngOnInit() {}

}
