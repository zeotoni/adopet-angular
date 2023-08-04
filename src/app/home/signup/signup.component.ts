import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from './confirm-password.validator';
import { User } from '../../shared/services/user-service/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  eye: string = 'visibility';
  eyeConfirm: string = 'visibility';
  inputType: string = 'password';
  inputConfirm: string = 'password';
  emailtakenMessage!: string;


  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private route: Router,
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/)]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  signup() {
    if(this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as User;
      this.service.registerUser(newUser)
        .subscribe(() => {
          this.route.navigate(['/signin'])
        },
        error => {
          if(error.status === 409) {
            this.emailtakenMessage = error.error.message;
          } else {
            throw new Error;
          }
        });
    }
  }

  toggleVisibility() {
    if(this.eye == 'visibility') {
      this.eye = 'visibility_off';
      this.inputType = 'text';
    } else {
      this.eye = 'visibility';
      this.inputType = 'password';
    }
  }

  toggleConfirmVisibility() {
    if(this.eyeConfirm == 'visibility') {
      this.eyeConfirm = 'visibility_off';
      this.inputConfirm = 'text';
    } else {
      this.eyeConfirm = 'visibility'
      this.inputConfirm = 'password';
    }
  }
}
