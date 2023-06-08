import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { AuthFormComponent } from '@app/shared/auth-form/auth-form.component';


@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule,
    AuthFormComponent
  ]
})
export class SingInModule { }
