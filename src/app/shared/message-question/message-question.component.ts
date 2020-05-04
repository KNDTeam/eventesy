import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-question',
  templateUrl: './message-question.component.html',
  styleUrls: ['./message-question.component.scss'],
})
export class MessageQuestionComponent implements OnInit {

  @Input('message') message;
  constructor() { }

  ngOnInit() {}

}
