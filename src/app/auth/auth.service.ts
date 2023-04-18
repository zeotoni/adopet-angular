import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const API  = 'https://cheddar-orange-origami.glitch.me/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any>{
    return this.http.get(API)
  }

}
