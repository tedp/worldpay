import * as uriTemplates from 'uri-templates';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { HypermediaResult, HypermediaLink, PaymentRequest } from '../../model/model';
import { queryResponse, authorizationResponse, cancelResponse } from './test-data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/vnd.worldpay.payments-v0.4+json',
    Authorization: 'Basic auth'
  })
};

// Should be initialised to some value at startup
const initialHypermediaResult: HypermediaResult = queryResponse;

const paymentsUrl = 'try.access.worldpay.com';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  constructor(private http: HttpClient) { }

  authorize(paymentRquest: PaymentRequest): Observable<HypermediaResult> {
    // const authorize = initialHypermediaResult._links['payments:authorize'] as HypermediaLink;
    // const link = uriTemplates(authorize.href);
    // return this.http.post<HypermediaResult>(link, paymentRquest, httpOptions)
    return of(authorizationResponse)
    .pipe(
      catchError(this.handleError)
    );
  }

  cancel(hypermediaResult: HypermediaResult): Observable<HypermediaResult> {
    const authorize = hypermediaResult._links['payments:cancel'] as HypermediaLink;
    const link = uriTemplates(authorize.href);
    // return this.http.post<HypermediaResult>(link, null, httpOptions)
    return of(cancelResponse)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
