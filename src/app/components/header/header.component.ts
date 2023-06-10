import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  src: string = '';
  description: string = '';
  currentRouteId: string = '';

  constructor(
    private location: Location,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.location.onUrlChange(x => {
      if(x.startsWith('/pets')) {
        this.router.events.subscribe(event => {
          if(event instanceof NavigationEnd) {
            const id = event.url.split('/')[2];
            this.currentRouteId = id;

            this.userService.getProfileUser(id).subscribe((user) => {
              this.src = user.image;
              this.description = 'Perfil do usuario'
            })
          }
        })
      } else {
        this.src = '';
        this.description = '';
      }
    })


  }

  goProfile() {
    this.router.navigate([`pets/${this.currentRouteId}/profile`])
  }

}
