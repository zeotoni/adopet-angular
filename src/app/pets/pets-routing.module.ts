import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PetsListComponent } from "./pets-list/pets-list.component";
import { MessageComponent } from "./message/message.component";
import { ProfileComponent } from "./profile/profile.component";
import { PetsListResolver } from "./pets-list/pets-list.resolver";

const routes: Routes = [
  {
    path: '',
    component: PetsListComponent,
    resolve: {
      pets: PetsListResolver
    }
  },
  {
    path: 'message',
    component: MessageComponent
  },{
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PetsRoutingModule {}
