import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pets } from '../pet/pet';
import { PetsService } from '../pets.service';

@Injectable({
  providedIn: 'root'
})
export class PetsListResolver implements Resolve<Pets> {

  constructor(
    private petsService: PetsService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pets> {
    return this.petsService.getPetList();
  }
}
