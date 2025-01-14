import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '@app/shared/auth-form/component/error-message/error-message.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ForgotPasswordRoutingModule,
    ErrorMessageComponent
  ]
})
export class ForgotPasswordModule { }