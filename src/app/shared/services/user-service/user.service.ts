import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

const API = 'https://cheddar-orange-origami.glitch.me/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(API, user)
  }

  updateUser(userId: number, body: any): Observable<User> {
    return this.http.patch<User>(API + `/${userId}`, body)
  }

  getProfileUser(userId: number): Observable<User> {
    return this.http.get<User>(API + `/${userId}`);
  }

  emailExistsCheck(email: string) {
    return this.http.get(API + `?email=${email}`);
  }
}
