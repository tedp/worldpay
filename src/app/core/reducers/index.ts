import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { PaymentsState, paymentReducer } from './payments.reducer';

export interface AppState {
  readonly payments: PaymentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  payments: paymentReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export * from './payments.reducer';

