import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/reducers';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { getAuthorizationResponse, getPaymentRequest } from '../core/selectors';
import { HypermediaResult, PaymentRequest } from '../core/model/model';
import { CancelAction } from '../core/actions/payments.actions';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.container.html',
  styleUrls: ['./confirm-payment.container.scss']
})
export class ConfirmPaymentContainer implements OnInit {

  paymentRquest$: Observable<PaymentRequest>;
  authorizationResponse$: Observable<HypermediaResult>;

  constructor(
    private store: Store<AppState>,
    private router: Router) {
      this.paymentRquest$ = this.store.select(getPaymentRequest);
      this.authorizationResponse$ = this.store.select(getAuthorizationResponse);
  }

  ngOnInit() {
  }

  confirmPayment() {
    // Dispatch action to settle payment
    this.router.navigate(['/payment-success']);
  }

  cancelPayment(authorizationResponse: HypermediaResult) {
    this.store.dispatch(new CancelAction({ authorizationResponse }));
    this.router.navigate(['/payment-cancelled']);
  }

}
