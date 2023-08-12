import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private totalRequests = 0;

  constructor(
    private loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.totalRequests++;
    this.loaderService.setLoading(true);

    return next.handle(request).pipe(
      finalize(() => {

        this.totalRequests--;

        if (this.totalRequests == 0) {
          this.loaderService.setLoading(false);
        }
      })
    );
  }
}
