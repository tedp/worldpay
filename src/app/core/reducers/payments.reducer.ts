import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { HypermediaResult, PaymentRequest } from '../model/model';
import * as Payments from '../actions/payments.actions';

export interface PaymentsState {
  paymentRequest: PaymentRequest;
  authorizationResponse: HypermediaResult;
  cancelResponse: HypermediaResult;
}

export const initialPaymentsState: PaymentsState = {
  paymentRequest: undefined,
  authorizationResponse: undefined,
  cancelResponse: undefined
};

export function paymentReducer(
  state = initialPaymentsState,
  action: Payments.ActionsUnion
): PaymentsState {
  switch (action.type) {
    case Payments.ActionTypes.AuthorizeSuccess: {
      return {
        ...state,
        authorizationResponse: action.payload.paymentResponse,
        paymentRequest: action.payload.paymentRequest
      };
    }

    case Payments.ActionTypes.CancelSuccess: {
      return {
        ...state,
        cancelResponse: action.payload.cancelResponse
      };
    }

    default: {
      return state;
    }
  }
}
