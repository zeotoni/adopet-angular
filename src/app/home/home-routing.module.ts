import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AUthGuard } from "../auth/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AUthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AUthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AUthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
