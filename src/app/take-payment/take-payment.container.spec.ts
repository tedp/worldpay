import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { TakePaymentContainer } from './take-payment.container';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../core/reducers';
import { By } from '@angular/platform-browser';
import { AuthorizeAction } from '../core/actions/payments.actions';
import { authorizationResponse, paymentRequest, cancelResponse } from '../core/services/payment/test-data';
import { PaymentRequest } from '../core/model/model';
import { Router } from '@angular/router';


describe('TakePaymentComponent', () => {
  let component: TakePaymentContainer;
  let fixture: ComponentFixture<TakePaymentContainer>;
  let dispatchSpy;
  let navigateSpy;

  const store: Store<AppState> = null;


  function submitForm() {
    const submitButton = fixture.debugElement.query(By.css('[type="submit"]')).nativeElement;
    submitButton.click();
    fixture.detectChanges();
  }

  function populateForm() {
    enterInputElementvalue(paymentRequest.instruction.narrative.line1, 'narrative');
    enterInputElementvalue(paymentRequest.instruction.value.currency, 'currency');
    enterInputElementvalue(paymentRequest.instruction.value.amount, 'amount');
    enterInputElementvalue(paymentRequest.instruction.paymentInstrument.type, 'type');
    enterInputElementvalue(paymentRequest.instruction.paymentInstrument.cardNumber, 'cardNumber');
    enterInputElementvalue(paymentRequest.instruction.paymentInstrument.cardExpiryDate.month, 'month');
    enterInputElementvalue(paymentRequest.instruction.paymentInstrument.cardExpiryDate.year, 'year');
    enterInputElementvalue(paymentRequest.instruction.paymentInstrument.cardHolderName, 'cardHolderName');
    fixture.detectChanges();
  }

  function enterInputElementvalue(value, elementName: string) {
    const inputElement = fixture.debugElement.query(By.css(`[formControlName="${elementName}"]`)).nativeElement;
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
  }

  beforeEach(fakeAsync(() => {
    dispatchSpy = jasmine.createSpy('dispatch');
    navigateSpy = jasmine.createSpy('router');

    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers:
      [
        { provide: Store, useValue: { dispatch: dispatchSpy } },
        { provide: APP_BASE_HREF, useValue : 'payment-cancelled' },
        { provide: Router, useValue: { navigate: navigateSpy } }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePaymentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('#submit', () => {
    const expectedPaymentRequest = {
      merchant: {
        entity: 'ABC'
      },
      transactionReference: 'XYZ',
      instruction: {
        narrative: 'Big Components LTD',
        value: {
          currency: null,
          amount: '10'
        },
        paymentInstrument: {
          type: null,
          cardNumber: '04584 34589 34534 34534',
          cardHolderName: 'Bob Smith',
          cardExpiryDate: {
            month: '10',
            year: '2022'
          }
        }
      }
    } as PaymentRequest;

    const expectedAction = new AuthorizeAction({ paymentRequest: expectedPaymentRequest });

    populateForm();
    submitForm();
    expect(dispatchSpy.calls.mostRecent().args[0]).toEqual(expectedAction);
    expect(navigateSpy).toHaveBeenCalledWith(['/confirm-payment']);
  });
});
