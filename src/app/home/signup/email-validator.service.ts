import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs";
import { UserService } from "src/app/shared/services/user-service/user.service";

@Injectable({ providedIn: 'root'})
export class EmailValidatorService {

  constructor(
    private service: UserService
  ) {}

  emailExists() {

   return (control: AbstractControl) => {

    return control
    .valueChanges
      .pipe(debounceTime(300))
      .pipe(
        switchMap((email) => this.service.emailExistsCheck(email)),
        map((isTaken) => {
          if(isTaken == 0) {
            return null
          }
          if(isTaken) {
            return { emailIsTaken: true }
          } else {
            return null
          }
        }),
        first()
      )
   }
  }

}
