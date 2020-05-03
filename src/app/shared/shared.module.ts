import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NgxYoutubePlayerModule, YoutubePlayerService } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from './video/video.component';
import { ChatComponent } from './chat/chat.component';
import { TimestampsComponent } from './timestamps/timestamps.component';
import { TimestampComponent } from './timestamps/timestamp/timestamp.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
    MatIconModule,
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
  bootstrap: [
    VideoComponent,
  ],
  providers: [
    YoutubePlayerService
  ]
})
export class SharedModule { }

platformBrowserDynamic().bootstrapModule(SharedModule);
