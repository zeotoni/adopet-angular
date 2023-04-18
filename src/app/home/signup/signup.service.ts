import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

const API = 'https://cheddar-orange-origami.glitch.me/usuarios';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: NewUser) {
    return this.http.post(API, user)
  }

  emailExistsCheck(email: string) {
    return this.http.get(API + `?emailSv=${email}`);
  }
}
