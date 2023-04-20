import { Component, Input } from '@angular/core';

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

}
