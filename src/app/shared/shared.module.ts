import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from './video/video.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
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
  ]
})
export class SharedModule { }
