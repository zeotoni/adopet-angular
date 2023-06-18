import { Injectable } from "@angular/core";
import { UserService } from "../shared/services/user-service/user.service";
import { ActivatedRouteSnapshot, CanActivate,  Router,  RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AUthGuard implements CanActivate{

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(this.userService.isLogged()) {
      this.router.navigate(['pets']);
      return false;
    }

    return true;
  }


}
