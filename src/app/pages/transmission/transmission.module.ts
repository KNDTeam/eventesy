import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { TransmissionPage } from './transmission.page';

const routes: Routes = [
  {
    path: '',
    component: TransmissionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    NgScrollbarModule
  ],
  declarations: [
    TransmissionPage
  ]
})
export class TransmissionPageModule {}
