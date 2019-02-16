import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaymentInstrument, Instruction, PaymentRequest, Merchant } from '../core/model/model';
import { cloneDeep } from 'lodash';
import { Store } from '@ngrx/store';
import { AppState } from '../core/reducers';
import { Router } from '@angular/router';
import { AuthorizeAction } from '../core/actions/payments.actions';

@Component({
  selector: 'app-take-payment',
  templateUrl: './take-payment.container.html',
  styleUrls: ['./take-payment.container.scss']
})
export class TakePaymentContainer implements OnInit {

  instructionForm: FormGroup;
  name = new FormControl('');
  cardTypes = ['Visa', 'Mastercard', 'Amex'];
  currencies = ['GBP', 'USD', 'AUD'];
  private merchant: Merchant = {
    entity: 'ABC'
  };
  private transactionReference = 'XYZ';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router) {

    this.instructionForm = this.createFormGroupWithBuilder(formBuilder);
  }

  ngOnInit() {
  }

  onSubmit() {
    const instruction: Instruction = cloneDeep(this.instructionForm.value.instruction);

    const paymentRequest: PaymentRequest = {
      merchant: this.merchant,
      transactionReference: this.transactionReference,
      instruction
    };
    this.store.dispatch(new AuthorizeAction({ paymentRequest }));
    this.router.navigate(['/confirm-payment']);
  }

  revert() {
    this.instructionForm.reset();
  }

  private createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      instruction: formBuilder.group({
        narrative: '',
        value: formBuilder.group({
          currency: [null, Validators.required],
          amount: [null, Validators.required]
        }),
        paymentInstrument: formBuilder.group({
          type: [null, Validators.required],
          cardNumber: [null, Validators.required],
          cardHolderName: [null, Validators.required],
          cardExpiryDate: formBuilder.group({
            month: '',
            year: ''
          })
        })
      })
    });
  }
}
