import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ModalPollComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    ModalPollComponent
  ]
})
export class SharedModule { }
