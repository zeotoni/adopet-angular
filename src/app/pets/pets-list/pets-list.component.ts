import { Component, OnInit, Renderer2 } from '@angular/core';
import { Pets } from '../pet/pet';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from '../pets.service';


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit{

  pets!: Pets;

  constructor(
    private render: Renderer2,
    private activatedRoute: ActivatedRoute,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.render.setStyle(document.body, 'background-color', '#FFF');

    this.activatedRoute.params.subscribe(() => {
      this.pets = this.activatedRoute.snapshot.data['pets'];
    })
  }
}

