import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, Pets } from './pet/pet';

const API = "http://localhost:3000/pets"

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
