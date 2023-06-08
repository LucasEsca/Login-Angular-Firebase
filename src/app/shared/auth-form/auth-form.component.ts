import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageComponent } from "./component/error-message/error-message.component";

const actionType = {
  singIn:{
    action: 'singIn',
    title: 'Sign In',
  },
  singUp: {
    ation: 'singUp',
    title: 'Sign Up',
  },
}as const;

type ActionType = keyof typeof actionType;

@Component({
    selector: 'app-auth-form',
    standalone: true,
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
    imports: [CommonModule, RouterModule, ReactiveFormsModule, ErrorMessageComponent]
})
export class AuthFormComponent implements OnInit {

@Input()action!:ActionType;
  form!: FormGroup;
  title!: string;

  private fb = inject(FormBuilder);
  private readonly emailPatten = 
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ;

  ngOnInit(): void {
    this.title =
      this.action === actionType.singIn.action
      ? actionType.singIn.title
      : actionType.singUp.title

    this.initForm();
  }

  onSubmit(){
    const {email, password} = this.form.value;
    this.action === actionType.singIn.action
      ? 'singIn'
      : 'singUp'
  }

  hasError(field: string): boolean {
    const fieldName = this.form.get(field);
    return !!fieldName?.invalid && fieldName.touched;
    
  }

  signInGoogle(): void {
    //todo
  }

  private initForm():void{
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPatten)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  
}
