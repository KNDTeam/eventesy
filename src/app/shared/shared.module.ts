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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxYoutubePlayerModule.forRoot(),
    CommonModule,
  ],
  declarations: [
    SidebarComponent,
    VideoComponent,
    ChatComponent,
  ],
  exports: [
    SidebarComponent,
    VideoComponent,
    ChatComponent,
  ],
  bootstrap: [
    VideoComponent
  ],
  providers: [
    YoutubePlayerService
  ]
})
export class SharedModule { }

platformBrowserDynamic().bootstrapModule(SharedModule);
