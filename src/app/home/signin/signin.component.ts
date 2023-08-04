import { UserService } from 'src/app/shared/services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenService } from 'src/app/shared/services/token/token.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  loginForm!: FormGroup;
  eye: string = 'visibility';
  inputType: string = 'password';
  msgErrorLogin!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
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

    this.authService
      .authenticate(email, password)
      .subscribe(
        (res: any) => {
          this.tokenService.setToken(res.token);
          this.router.navigate([`pets`]);
        },
        error => {
          console.log(error.error.message[1]);

          // this.msgErrorLogin = error.error.message;
    })

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
