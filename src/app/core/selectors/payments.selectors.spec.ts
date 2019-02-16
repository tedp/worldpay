import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';
import { PaymentsState, reducers, AppState } from '../reducers';
import { AuthorizeSuccessAction, CancelSuccessAction } from '../actions/payments.actions';
import { authorizationResponse, paymentRequest, cancelResponse } from '../services/payment/test-data';
import { getAuthorizationResponse, getPaymentRequest, getCancelResponse } from './payments.selectors';

describe('PaymentsSelector', () => {

  let paymentStore: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers)
      ],
    });
    paymentStore = TestBed.get(Store);
  });

  describe('While selecting state selector using store', () => {
    it('should get the authorizationResponse state', (done) => {
      // Act
      paymentStore.dispatch(new AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse }));
      paymentStore.select(getAuthorizationResponse)
      .subscribe(result => {
          // Assert
        expect(result).toBeTruthy();
        expect(result).toEqual(authorizationResponse);
        done();
        });
      });

    it('should get the paymentRequest state', (done) => {
      // Act
      paymentStore.dispatch(new AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse }));
      paymentStore.select(getPaymentRequest)
      .subscribe(result => {
          // Assert
        expect(result).toBeTruthy();
        expect(result).toEqual(paymentRequest);
        done();
        });
      });

    it('should get the cancelResponse state', (done) => {
        // Act
        paymentStore.dispatch(new AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse }));
        paymentStore.dispatch(new CancelSuccessAction({ cancelResponse }));
        paymentStore.select(getCancelResponse)
        .subscribe(result => {
            // Assert
          expect(result).toBeTruthy();
          expect(result).toEqual(cancelResponse);
          done();
          });
        });

    });
});
