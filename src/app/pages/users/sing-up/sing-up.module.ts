import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import { AuthFormComponent } from '@app/shared/auth-form/auth-form.component';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    AuthFormComponent
  ]
})
export class SingUpModule { }
