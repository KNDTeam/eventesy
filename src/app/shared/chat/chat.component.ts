import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Observable } from 'rxjs';
import { NgScrollbar } from 'ngx-scrollbar';

import { MessagesService } from '@app/services/messages.service';
import { Message } from '@app/entities/Chat';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {

  @ViewChild(NgScrollbar, { static: true }) scrollable: NgScrollbar;
  public messages$: Observable<Message[]>;
  public messages;

  constructor(
    private cdRef: ChangeDetectorRef,
    private messageService: MessagesService
  ) {}

  ngOnInit() {
    this.messages$ = this.messageService.getMockMessages()
      .pipe(
        delay(200),
        tap((r) => this.onScrollbarUpdate())
      );

    this.messages$.subscribe((response) => {
      this.messages = response;
    });
  }

  onScrollbarUpdate() {
    this.scrollable.scrollTo({ bottom: 0, duration: 100 });
  }

}
