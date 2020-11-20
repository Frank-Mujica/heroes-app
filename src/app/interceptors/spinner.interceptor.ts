import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';

import { SpinnerService } from '../shared/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const spinner = req.params.get('spinner');
    if (spinner && spinner === 'false') {
      req.params.delete('spinner');
      return next.handle(req);
    }

    this.spinner.openSpinner();

    return next.handle(req).pipe(
      delay(0),
      finalize(() => this.spinner.closeSpinner())
    );
  }
}
