import { UserService } from 'src/app/shared/services/user-service/user.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent {

  @Input() img = '';
  @Input() alt = '';
  @Input() name = '';
  @Input() age = '';
  @Input() size = '';
  @Input() characterists = '';
  @Input() adress = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  sendMessage() {

    if(this.userService.isLogged()) {
      this.router.navigate(['pets/message']);
    } else {
      this.router.navigate(['home/signin']);
    }
  }
}
