import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { PetsService } from '../pets.service';
import { Observable } from 'rxjs';
import { Pets } from '../pet/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit{

  @Input() pets: Pets = [];

  pets$!: Observable<Pets>;

  constructor(
    private render: Renderer2,
    private service: PetsService
  ) {}

  ngOnInit(): void {
    this.render.setStyle(document.body, 'background-color', '#FFF');
    this.pets$ = this.service.getPetList();
  }
}
