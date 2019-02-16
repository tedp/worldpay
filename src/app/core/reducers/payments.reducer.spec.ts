import { paymentReducer, initialPaymentsState } from './payments.reducer';
import { AuthorizeAction, AuthorizeSuccessAction, CancelSuccessAction } from '../actions/payments.actions';
import { paymentRequest, authorizationResponse, cancelResponse } from '../services/payment/test-data';

describe('Payments reducer function', () => {

  describe('When no action is made', () => {

    it('should default to initial payments state', () => {
      // Arrange
      const action = {} as any;
      // Act
      const state = paymentReducer(undefined, action);
      // Assert
      expect(state).toBeTruthy();
      expect(state).toBe(initialPaymentsState);
    });
  });

  describe('When payment authorization is requested', () => {
    it('should have a truthy loading of the state', () => {
      // Arrange
      const action = new AuthorizeSuccessAction({ paymentRequest, paymentResponse: authorizationResponse });
      // Act
      const state = paymentReducer(initialPaymentsState, action);
      // Assert
      expect(state).toBeTruthy();
      expect(state.authorizationResponse).toEqual(authorizationResponse);
    });
  });

  describe('When payment authorization is cancelled', () => {
    it('should have a truthy loading of the state', () => {
      // Arrange
      const action = new CancelSuccessAction({ cancelResponse });
      // Act
      const state = paymentReducer(initialPaymentsState, action);
      // Assert
      expect(state).toBeTruthy();
      expect(state.cancelResponse).toEqual(cancelResponse);
    });
  });
});
