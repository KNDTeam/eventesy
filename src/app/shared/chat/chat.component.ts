import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { NgScrollbar } from 'ngx-scrollbar';

import { MessagesService } from '@app/services/messages.service';
import { Message } from '@app/entities/Chat';
import { delay, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit, OnDestroy {

  @ViewChild(NgScrollbar, { static: true }) scrollable: NgScrollbar;
  public messages$;
  public messages;
  public unlist$ = new Subject();

  constructor(
    private cdRef: ChangeDetectorRef,
    private messageService: MessagesService
  ) {}

  ngOnInit() {
    this.messages$ = this.messageService.getMockMessages()
      .pipe(
        delay(200),
        tap((r) => this.onScrollbarUpdate())
      ).subscribe((response) => {
        this.messages = response;
        this.cdRef.markForCheck();
      });

    this.messageService.listenNewMessages()
      .pipe(
        takeUntil(this.unlist$)
      ).subscribe((message) => {
        this.messages.push(message);
        this.cdRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.unlist$.next();
    this.unlist$.complete();
  }

  onScrollbarUpdate() {
    this.scrollable.scrollTo({ bottom: 0, duration: 100 });
  }

}
