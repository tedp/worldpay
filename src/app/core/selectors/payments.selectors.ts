import { AppState } from '../reducers';

export const getAuthorizationResponse = (state: AppState) => state.payments.authorizationResponse;

export const getPaymentRequest = (state: AppState) => state.payments.paymentRequest;

export const getCancelResponse = (state: AppState) => state.payments.cancelResponse;
