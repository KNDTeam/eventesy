import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '@app/material.module';
import { NgxYoutubePlayerModule, YoutubePlayerService } from 'ngx-youtube-player';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { SidebarComponent } from './sidebar/sidebar.component';

import { VideoComponent } from './video/video.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
import { TimestampComponent } from './timestamps/timestamp/timestamp.component';

import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from '@shared/message/message.component';
import { MessageQuestionComponent } from '@shared/message-question/message-question.component';
import { MessageResponseComponent } from '@shared/message-response/message-response.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgScrollbarModule,
    NgxYoutubePlayerModule.forRoot(),
    MaterialModule
  ],
  declarations: [
    SidebarComponent,
    VideoComponent,
    TimestampsComponent,
    TimestampComponent,
    ChatComponent,
    MessageComponent,
    MessageQuestionComponent,
    MessageResponseComponent
  ],
  exports: [
    SidebarComponent,
    VideoComponent,
    TimestampsComponent,
    TimestampComponent,
    ChatComponent,
    MessageComponent,
    MessageQuestionComponent,
    MessageResponseComponent,
    MaterialModule
  ],
  providers: [
    YoutubePlayerService
  ]
})
export class SharedModule { }
