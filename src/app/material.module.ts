import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatChipsModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
