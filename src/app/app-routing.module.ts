import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakePaymentContainer } from './take-payment/take-payment.container';
import { ConfirmPaymentContainer } from './confirm-payment/confirm-payment.container';
import { PaymentCancelledContainer } from './payment-cancelled/payment-cancelled.container';
import { PaymentSuccessContainer } from './payment-success/payment-success.container';

const routes: Routes = [
  { path: 'take-payment', component: TakePaymentContainer},
  { path: 'confirm-payment', component: ConfirmPaymentContainer},
  { path: 'payment-success', component: PaymentSuccessContainer},
  { path: 'payment-cancelled', component: PaymentCancelledContainer},
  { path: '',
    redirectTo: '/take-payment',
    pathMatch: 'full'
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
