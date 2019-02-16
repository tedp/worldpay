import { AuthorizeAction } from './payments.actions';
import { authorizationResponse, paymentRequest, cancelResponse } from '../services/payment/test-data';
import * as PaymentActions from '../actions/payments.actions';

describe('hearing actions', () => {

  it('Should create AuthorizeAction action', () => {
    const action = new AuthorizeAction({ paymentRequest });
    expect({ ...action }).toEqual({
        type: PaymentActions.ActionTypes.Authorize,
        payload: { paymentRequest }
    });
  });

  it('Should create AuthorizeSuccessAction action', () => {
    const action = new PaymentActions.AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse });
    expect({ ...action }).toEqual({
        type: PaymentActions.ActionTypes.AuthorizeSuccess,
        payload: { paymentRequest, paymentResponse: authorizationResponse }
    });
  });

  it('Should create CancelAction action', () => {
    const action = new PaymentActions.CancelAction({ authorizationResponse });
    expect({ ...action }).toEqual({
        type: PaymentActions.ActionTypes.Cancel,
        payload: { authorizationResponse }
    });
  });

  it('Should create CancelAction action', () => {
    const action = new PaymentActions.CancelSuccessAction({ cancelResponse });
    expect({ ...action }).toEqual({
        type: PaymentActions.ActionTypes.CancelSuccess,
        payload: { cancelResponse }
    });
  });
});
