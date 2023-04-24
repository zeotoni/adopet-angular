import { PetsRoutingModule } from './pets-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet/pet.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { MessageComponent } from './message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    PetsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule
  ],
  declarations: [
    PetComponent,
    PetsListComponent,
    MessageComponent,
    ProfileComponent
  ]
})
export class PetsModule { }
