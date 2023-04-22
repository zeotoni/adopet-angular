import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PetsListComponent } from "./pets-list/pets-list.component";
import { MessageComponent } from "./message/message.component";

const routes: Routes = [
  {
    path: '',
    component: PetsListComponent
  },
  {
    path: 'message',
    component: MessageComponent
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
