import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, AuthorizeAction, AuthorizeSuccessAction, CancelAction, CancelSuccessAction } from '../actions/payments.actions';
import { switchMap, mergeMap, map } from 'rxjs/operators';
import { PaymentService } from '../services/payment/payment.service';
import { Observable, merge } from 'rxjs';
import { Action, Store } from '@ngrx/store';

import { of } from 'rxjs';

@Injectable()
export class PaymentsEffects {

  @Effect()
  authorizePayment$: Observable<Action> = this.actions$
    .pipe(
      ofType(ActionTypes.Authorize),
      mergeMap((action: AuthorizeAction) => this.paymentsService.authorize(action.payload.paymentRequest)
        .pipe(
          map(paymentResponse => new AuthorizeSuccessAction({ paymentRequest: action.payload.paymentRequest, paymentResponse }))
        )
      )
    );

    @Effect()
    cancelPayment$: Observable<Action> = this.actions$
      .pipe(
        ofType(ActionTypes.Cancel),
        mergeMap((action: CancelAction) => this.paymentsService.cancel(action.payload.authorizationResponse)
          .pipe(
            map(cancelResponse => new CancelSuccessAction({ cancelResponse }))
          )
        )
      );

    constructor(
        private actions$: Actions,
        private paymentsService: PaymentService
      ) {}
}
