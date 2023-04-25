import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from './confirm-password.validator';
import { User } from '../../shared/services/user-service/user';
import { Router } from '@angular/router';
import { EmailValidatorService } from './email-validator.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;

  constructor(
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private service: UserService,
    private route: Router,
    private emailValidator: EmailValidatorService
  ) {
  }

  ngOnInit(): void {
    // this.renderer.setStyle(document.body, 'background-color', '#FFF');
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [this.emailValidator.emailExists()]],
      name: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: [confirmPasswordValidator]
    }
    )
  }

  signup() {
    if(this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as User;
      this.service.registerUser(newUser)
        .subscribe(() => {
          this.route.navigate(['/signin'])
        },
        err => console.log(err));
    }
  }
}
