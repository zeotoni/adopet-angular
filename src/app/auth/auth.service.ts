import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { User } from '../shared/services/user-service/user';

// const API  = 'https://cheddar-orange-origami.glitch.me/usuarios';
const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string) {
    return this.http
      .post(API + '/auth/signin', {email: email, password: password})
  }

}
