import { LoaderService } from './../../components/loader/loader.service';
import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, finalize, of } from 'rxjs';
import { Pets } from '../pet/pet';
import { PetsService } from '../pets.service';

@Injectable({
  providedIn: 'root'
})
export class PetsListResolver implements Resolve<Pets> {

  private totalRequests = 0;

  constructor(
    private petsService: PetsService,
    private loaderService: LoaderService
  ) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pets> {
    this.totalRequests++;
    this.loaderService.setLoading(true);

    return this.petsService.getPetList().pipe(
    finalize(() => {

      this.totalRequests--;

      if (this.totalRequests == 0) {
        this.loaderService.setLoading(false);
      }
    })
    );
  }
}
