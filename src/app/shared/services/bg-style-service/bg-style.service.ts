import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, filter } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class BgStyleService {

  rota: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute : ActivatedRoute
  ) {
  }

  getLocation() {
    return this.location.path()

    // this.location.onUrlChange(x => this.urlChange(x))
    // this.router.events.subscribe((event: Event) => {
    //  return event instanceof NavigationEnd
    //   if(event instanceof NavigationEnd) {
    //     event.url;
    //   }
    // })

    // this.router.events
    //   .pipe(filter(r => r instanceof NavigationEnd))
    //   .subscribe(r => {
    //     var n = (r as NavigationEnd).url;
    //     return n
    //   })
  }

  // urlChange(x: string): Observable<string> {
  //   this.rota = x
  //   return this.rota.normalize
  // }
}
