import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/services/user-service/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  loginForm!: FormGroup;
  eye: string = 'visibility';
  inputType: string = 'password';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate().subscribe(
      (res) => {
        res.forEach((user: User) => {

          if(user.email == email && user.password == password) {
            this.router.navigate([`/pets/${user._id}`])
          }

        });
      },
      err => console.log(err));
  }

  toggleVisibility() {
    if(this.eye == 'visibility') {
      this.eye = 'visibility_off';
      this.inputType = 'text';
    } else {
      this.eye = 'visibility'
      this.inputType = 'password'
    }
  }
}
