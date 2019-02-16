import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCancelledContainer } from './payment-cancelled.container';
import { AppModule } from '../app.module';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('PaymentCancelledComponent', () => {
  let component: PaymentCancelledContainer;
  let fixture: ComponentFixture<PaymentCancelledContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'payment-cancelled', component: PaymentCancelledContainer }
        ]),
        AppModule
      ],
      providers:
      [
        {provide: APP_BASE_HREF, useValue : 'payment-cancelled' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(PaymentCancelledContainer);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  // More test should be added here along the lines of take-payment-container.spec.ts

});
