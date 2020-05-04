import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxCaptureModule } from 'ngx-capture';

import { MaterialModule } from '@app/material.module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from './video/video.component';
import { ChatComponent } from './chat/chat.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
import { TimestampComponent } from './timestamps/timestamp/timestamp.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
    MaterialModule,
    NgxCaptureModule,
  ],
  declarations: [
    SidebarComponent,
    VideoComponent,
    ChatComponent,
    TimestampsComponent,
    TimestampComponent,
  ],
  exports: [
    SidebarComponent,
    VideoComponent,
    ChatComponent,
    TimestampsComponent,
    TimestampComponent,
  ],
})
export class SharedModule { }
