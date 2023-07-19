import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "./user";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  userSubject = new BehaviorSubject<User>(null!);

  setUserProfile(token: string): Observable<any> {

    const user: Observable<User> = jwtDecode(token);
    return user;
  }

  getProfileUser(): Observable<User> {
    return this.userSubject.asObservable();
  }
}
