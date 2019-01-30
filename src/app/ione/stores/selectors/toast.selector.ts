import { createSelector } from '@ngrx/store';
import { selectIone } from '../reducers';

// Toast state
export const selectToastState = createSelector(
  selectIone,
  ioneState => ioneState.toastState
);

export const selectToasts = createSelector(
  selectToastState,
  loadingState => loadingState.toasts
);
