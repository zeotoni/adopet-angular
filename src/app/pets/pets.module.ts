import { PetsRoutingModule } from './pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet/pet.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { MessageComponent } from './message/message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    PetComponent,
    PetsListComponent,
    MessageComponent
  ]
})
export class PetsModule { }
