import { Injectable } from "@angular/core";
import { SignupService } from "./signup.service";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs";

@Injectable({ providedIn: 'root'})
export class EmailValidatorService {

  constructor(
    private service: SignupService
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
