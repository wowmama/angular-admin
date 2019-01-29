import { createSelector } from '@ngrx/store';
import { selectIone } from '../reducers';

// Loading state
export const selectLoadingState = createSelector(
  selectIone,
  ioneState => ioneState.loadingState
);

export const selectIsLoading = createSelector(
  selectLoadingState,
  loadingState => loadingState.loadings.length > 0
);
export const selectLoading = createSelector(
  selectLoadingState,
  loadingState => loadingState.loadings[0]
);
