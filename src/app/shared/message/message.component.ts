import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '@app/services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  @Input('message') message;
  public vote = 0;

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() { }

  public upvote() {
    (this.vote === 1) ? this.vote = 0 : this.vote = 1;
  }

  public downvote() {
    (this.vote === -1) ? this.vote = 0 : this.vote = -1;
  }

  public getScore() {
    return this.message.score + this.vote;
  }

  public setMessageAsSelected(message) {
    this.messageService.setSelectedMessage(message);
  }

}
