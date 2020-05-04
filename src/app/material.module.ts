import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatChipsModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDividerModule
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
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
