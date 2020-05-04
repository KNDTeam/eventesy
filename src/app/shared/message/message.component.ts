import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '@app/services/messages.service';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input('message') message;
  public vote = 0;
  private unlist$ = new Subject();
  private counter$ = interval(5000);

  constructor(
    private cdRef: ChangeDetectorRef,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.counter$.pipe(
      takeUntil(this.unlist$)
    ).subscribe((time) => {
      this.message.score = this.message.score + Math.floor(Math.random() * (5 - 1 + 1) + 1);
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unlist$.next();
    this.unlist$.complete();
  }

  public upvote() {
    (this.vote === 1) ? this.vote = 0 : this.vote = 1;
    this.cdRef.markForCheck();
  }

  public downvote() {
    (this.vote === -1) ? this.vote = 0 : this.vote = -1;
    this.cdRef.markForCheck();
  }

  public getScore() {
    return this.message.score + this.vote;
  }

  public setMessageAsSelected(message) {
    this.messageService.setSelectedMessage(message);
  }

}
