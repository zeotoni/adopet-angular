import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  src: string = '';
  description: string = '';
  logOutMessage: string = '';
  icon: string = '';


  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {

    this.location.onUrlChange(x => {
      if(x.startsWith('/pets')) {
       this.userService.getProfileUser(this.userService.getUserId()).subscribe((user) => {
          this.src = user.image;
          this.description = 'Perfil do usuário';
          this.logOutMessage = 'Sair';
          this.icon = 'logout';
       })
      } else {
        this.src = '';
        this.description = '';
      }
    })
  }

  logOut(): void {
    this.tokenService.removeToken();
    this.icon = '';
    this.logOutMessage = '';
    this.router.navigate(['']);
  }

  goMessage(): void {
    if(this.userService.isLogged()) {
      this.router.navigate(['pets/message'])
    }
  }

}
