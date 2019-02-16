import { TestBed } from '@angular/core/testing';

import { PaymentService } from './payment.service';
import { HttpClient } from '@angular/common/http';
import { paymentRequest, authorizationResponse, cancelResponse } from './test-data';
import { cloneDeep } from 'lodash';

describe('PaymentService', () => {

  beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      {
        provide: HttpClient,
        useValue: {
        }
      }
    ]
  });
});

  it('should be created', () => {
    const service: PaymentService = TestBed.get(PaymentService);
    expect(service).toBeTruthy();
  });

  it('#authorize', () => {
    const service: PaymentService = TestBed.get(PaymentService);

    const expectedBody = cloneDeep(authorizationResponse);

    service.authorize(paymentRequest)
    .subscribe(actualAuthorizeResponse => {
      expect(actualAuthorizeResponse).toEqual(expectedBody);
    });
  });

  it('#cancel', () => {
    const service: PaymentService = TestBed.get(PaymentService);

    const expectedBody = cloneDeep(cancelResponse);

    service.cancel(authorizationResponse)
    .subscribe(actualCancelResponse => {
      expect(actualCancelResponse).toEqual(expectedBody);
    });
  });

});
