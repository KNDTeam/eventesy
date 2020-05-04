import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '@app/services/messages.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './transmission.page.html',
  styleUrls: ['./transmission.page.scss'],
})
export class TransmissionPage implements OnInit, OnDestroy {
  private unlist$ = new Subject();
  public selectedMessage$;
  public selectedMessage;

  public folder: string;

  public messageTarget = 'all';
  public messageQuestion;

  public startTimer = '0';

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.messageService.listenSelectedMessage().pipe(
        takeUntil(this.unlist$)
      ).subscribe((message) => {
        this.selectedMessage = message;
      });
  }

  ngOnDestroy() {
    this.unlist$.next();
    this.unlist$.complete();
  }

  public removeSelectedMessage() {
    this.messageService.setSelectedMessage(false);
  }
}
