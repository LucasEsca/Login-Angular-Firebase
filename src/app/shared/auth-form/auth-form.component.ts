import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

@Input()action!:ActionType;
  form!: FormGroup;
  title!: string;

  private fb = inject(FormBuilder);
  private readonly emailPatten = '';

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

  hasErrors(field: string): boolean {
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
