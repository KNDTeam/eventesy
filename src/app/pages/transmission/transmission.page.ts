import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '@app/services/messages.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '@app/services/auth.service';

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
  public messageQuestion: boolean;
  public messageContent;

  public startTimer = '0';

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
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

  public sendMessage(ev) {
    const user = this.authService.getCurrentUser();
    // const msgEx = {
    //   id: 13290,
    //   sender: {
    //     id: '44124557',
    //     tag: '@roberto-costa',
    //     fullName: 'Roberto Costa',
    //     role: 'admin'
    //   },
    //   content: 'programming the port won\'t do anything, we need to program the redundant PCI sensor!',
    //   timestamp: '2020-05-04T10:19:59.843Z',
    //   type: 'normal'
    // };

    const message = {
      id: Date.now,
      sender: user,
      content: this.messageContent,
      timestamp: new Date(Date.now()).toISOString(),
      type: 'normal'
    };

    if (this.messageQuestion) {
      message.type = 'question';
      message['score'] = 1;
    }

    if (this.selectedMessage) {
      message.type = 'response';
      message['message_quoted'] = this.selectedMessage;
    }

    this.messageService.setNewMessage(message);
    this.resetForm();
  }

  private resetForm() {
    this.messageQuestion = false;
    this.messageContent = '';
    this.removeSelectedMessage();
  }
}
