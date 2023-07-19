import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/shared/services/user-service/user';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  user!: User;
  subUser!: Subscription;
  onPetsPage: boolean = false;
  ppp!: boolean;
  userImage: string = 'assets/img/perfil.png'

  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}


  ngOnInit(): void {
    this.location.onUrlChange(url => {
      if(url.startsWith('/pets') && this.tokenService.hasToken()) {
        this.onPetsPage = true;
        this.user = jwtDecode(this.tokenService.getToken()!);
        this.userImage = this.user.image;


      } else {
        this.onPetsPage = false;
        this.ppp = true
      }

      if(url.startsWith('/home')) {
        this.ppp = false;
      }
    })

  }

  logOut(): void {
    this.userService.logOut();
    this.router.navigate(['']);
  }

  goMessage(): void {
    if(this.userService.isLogged()) {
      this.router.navigate(['pets/message'])
    }
  }

}
