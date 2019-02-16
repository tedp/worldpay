import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPaymentContainer } from './confirm-payment.container';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ConfirmPaymentComponent', () => {
  let component: ConfirmPaymentContainer;
  let fixture: ComponentFixture<ConfirmPaymentContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers:
      [
        {provide: APP_BASE_HREF, useValue : 'confirm-payment' }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPaymentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  // More test should be added here along the lines of take-payment-container.spec.ts
});
