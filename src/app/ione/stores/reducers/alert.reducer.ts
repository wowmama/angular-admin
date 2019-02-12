import { Alert } from '../../models/alert.model';
import * as fromAlert from '../actions/alert.action';
export interface AlertState {
  alerts: Alert[];
}

export const initailAlertState: AlertState = {
  alerts: [],
};

export function reducer(
  state: AlertState = initailAlertState,
  action: fromAlert.AlertAction
): AlertState {
  switch (action.type) {
    case fromAlert.ActionTypes.PushAlert: {
      return {
        ...state,
        alerts: [action.payload.alert, ...state.alerts]
      };
    }
    case fromAlert.ActionTypes.PopAlert: {
      return {
        ...state,
        alerts: state.alerts.slice(1)
      };
    }
  }
  return state;
}
