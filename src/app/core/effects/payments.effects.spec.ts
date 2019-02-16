import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import * as PaymentActions from '../actions/payments.actions';
import { PaymentsEffects } from './payments.effects';
import { authorizationResponse, paymentRequest, cancelResponse } from '../services/payment/test-data';

describe('Payment Effects', () => {
  let effects: PaymentsEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        PaymentsEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(PaymentsEffects);
  });

  it('should authorize payment', () => {
    const action = new PaymentActions.AuthorizeAction({ paymentRequest });
    const completion = new PaymentActions.AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse });

    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.authorizePayment$).toBeObservable(expected);
  });

  it('should cancel payment', () => {
    const action = new PaymentActions.CancelAction({ authorizationResponse });
    const completion = new PaymentActions.CancelSuccessAction({ cancelResponse });

    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.cancelPayment$).toBeObservable(expected);
  });
});
