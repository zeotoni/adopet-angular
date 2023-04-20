import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from './pet/pet';

const API = 'https://cheddar-orange-origami.glitch.me/cardPets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPetList(): Observable<Pets> {
    return this.http.get<Pets>(API);
  }
}
