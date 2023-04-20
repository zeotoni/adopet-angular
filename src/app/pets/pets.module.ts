import { PetsRoutingModule } from './pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet/pet.component';
import { PetsListComponent } from './pets-list/pets-list.component';



@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule
  ],
  declarations: [
    PetComponent,
    PetsListComponent
  ]
})
export class PetsModule { }
