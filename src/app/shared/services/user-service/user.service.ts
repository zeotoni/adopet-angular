import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "./user";
import { TokenService } from "../token/token.service";
import jwtDecode from "jwt-decode";


const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private userSubject = new BehaviorSubject<User>(null!);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // if(tokenService.hasToken()) {
    //   this.decodeJwt();
    // }
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${API}/auth/signup`, user)
  }

  updateUser(userId: string, body: any): Observable<User> {
    return this.http.put<User>(`${API}/users/${userId}`, body)
  }

  getProfileUser(userId: string): Observable<User> {
    return this.http.get<User>(`${API}/users/${userId}`);
  }

  getUserId(): string  {
    const tokenSave =  this.tokenService.getToken()!;
    const user: any = jwtDecode(tokenSave);
    const id = user.id;

    return id;
  }

  // private decodeJwt() {
  //   const token: any = this.tokenService.getToken();
  //   const user: any = jwtDecode(token) as User;

  //   this.userSubject.next(user);
  // }

  // returnUser() {
  //   return this.userSubject.asObservable();
  // }

  logOut() {
    this.tokenService.removeToken();
    // this.userSubject.next(null!)
  }
  // getUserImg(): string {
  //   const token: any = this.tokenService.getToken();
  //   const user: any = jwtDecode(token);

  //   return user.image;
  // }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  emailExistsCheck(email: string) {
    return this.http.get(API + `?email=${email}`);
  }
}
