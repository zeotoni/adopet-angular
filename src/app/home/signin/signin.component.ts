import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private renderer: Renderer2,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background-color', '#FFF');
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
        res.forEach((el: any) => {
          if(el.email == email && el.password == password) {
            this.router.navigate(['pets'])
          }

        });
      },
      err => console.log(err));
  }
}
