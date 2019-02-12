import { createSelector } from '@ngrx/store';
import { selectIone } from '../reducers';

// Alert state
export const selectAlertState = createSelector(
  selectIone,
  ioneState => ioneState.alertState
);

export const selectAlert = createSelector(
  selectAlertState,
  alertSate => alertSate.alerts[0]
);

export const selectHasAlerts = createSelector(
  selectAlertState,
  alertSate => alertSate.alerts.length > 0
);
