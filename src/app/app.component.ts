import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Adopet-Angular';
  body: string = '';

  constructor( private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange( x => {

      if(x == '/home') {
        this.body = 'home'
      }

      if(x == '/home/signin' || x == '/home/signup') {
        this.body = 'signin'
      }

      if(x.startsWith('/pets')) {
        this.body = 'pets'
      }
    })
  }
}
