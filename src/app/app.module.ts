import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { PaymentsEffects } from './core/effects/payments.effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/reducers';
import { TakePaymentContainer } from './take-payment/take-payment.container';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ConfirmPaymentContainer } from './confirm-payment/confirm-payment.container';
import { PaymentSuccessContainer } from './payment-success/payment-success.container';
import { PaymentCancelledContainer } from './payment-cancelled/payment-cancelled.container';


@NgModule({
  declarations: [
    AppComponent,
    TakePaymentContainer,
    ConfirmPaymentContainer,
    PaymentSuccessContainer,
    PaymentCancelledContainer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([PaymentsEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
