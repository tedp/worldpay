import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessContainer } from './payment-success.container';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('PaymentSuccessComponent', () => {
  let component: PaymentSuccessContainer;
  let fixture: ComponentFixture<PaymentSuccessContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers:
      [
        {provide: APP_BASE_HREF, useValue : 'payment-success' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSuccessContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  // More test should be added here along the lines of take-payment-container.spec.ts

});
