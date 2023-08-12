import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { User } from 'src/app/shared/services/user-service/user';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{


  user!: User;
  showUserInfo: boolean = false;
  showLoginBtn!: boolean;
  menu!: boolean;
  userImage!: string;

  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}


  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    this.location.onUrlChange(url => {
      if(url.startsWith('/pets') && this.tokenService.hasToken()) {
        this.showUserInfo = true;
        this.menu = false;
        this.userImage = this.userService.getUserImage();

      } else {
        this.showUserInfo = false;
        this.showLoginBtn = true
      }

      if(url.startsWith('/home')) {
        this.showLoginBtn = false;
      }
    })
  }

  logOut(): void {
    this.userService.logOut();
    this.router.navigate(['']);
  }

  goMessage(): void {
    if(this.userService.isLogged()) {
      this.router.navigate(['pets/message']);
    }
  }

  showMenu() {
    this.menu = !this.menu;
  }

}
