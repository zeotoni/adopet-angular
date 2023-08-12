import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


// const API = 'https://adopet-api.onrender.com';
const API = 'http://localhost:3000';

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
