import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, Pets } from './pet/pet';
import { environment } from 'src/environments/environment.development';

// const API = "https://adopet-api.onrender.com/pets"
const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPetList(): Observable<Pets> {
    return this.http.get<Pets>(`${API}/pets`);
  }
}
