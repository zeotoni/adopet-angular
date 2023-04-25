import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  src: string = '';
  description: string = '';

  constructor(private location: Location) {}

  ngOnInit(): void {

    this.location.onUrlChange(x => {
      if(x.startsWith('/pets')) {
        this.src = '../../../../assets/img/perfil.png'
        this.description = 'Perfil do usuario'
      } else {
        this.src = '';
        this.description = '';
      }
    })

  }

}
