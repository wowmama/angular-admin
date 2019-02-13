import { ActionReducerMap } from '@ngrx/store';
import * as fromAlert from './market-activities.reducer';


export interface AppState {
  marketActivitiesState: fromAlert.MarketActivitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  marketActivitiesState: fromAlert.reducer,
};

export const selectApp = (state: AppState) => state;


