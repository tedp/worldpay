import { Action } from '@ngrx/store';
import { PaymentRequest, HypermediaResult, PaymentInstrument } from '../model/model';

export enum ActionTypes {
  Authorize = 'Authorize payment',
  AuthorizeSuccess = 'Authorize payment success',
  Cancel = 'Cancel payment',
  CancelSuccess = 'Cancel payment success'
}

export class AuthorizeAction implements Action {
  readonly type = ActionTypes.Authorize;

  constructor(public payload: { paymentRequest: PaymentRequest }) {}
}

export class AuthorizeSuccessAction implements Action {
    readonly type = ActionTypes.AuthorizeSuccess;

    constructor(public payload: { paymentRequest: PaymentRequest, paymentResponse: HypermediaResult }) {}
  }

export class CancelAction implements Action {
  readonly type = ActionTypes.Cancel;

  constructor(public payload: { authorizationResponse: HypermediaResult }) {}
}

export class CancelSuccessAction implements Action {
    readonly type = ActionTypes.CancelSuccess;

    constructor(public payload: { cancelResponse: HypermediaResult }) {}
  }

export type ActionsUnion = AuthorizeAction | CancelAction | AuthorizeSuccessAction | CancelSuccessAction;
