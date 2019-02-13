import { createSelector } from '@ngrx/store';
import { IoneQueryBuilder } from 'src/app/ione/models/ione-query.model';
import { AppState, selectApp } from '../reducers';

export const selectMarketActivitiesState = createSelector(
  selectApp,
  (state: AppState) => state.marketActivitiesState,
);

export const selectMarketActivities = createSelector(
  selectMarketActivitiesState,
  marketActivitiesState => marketActivitiesState.marketActivities
);

export const selectselectMarketActivitiesParams = createSelector(
  selectMarketActivitiesState,
  marketActivitiesState => {
    const params = IoneQueryBuilder.getParams(marketActivitiesState.query);
    return {
      ...params,
      ...marketActivitiesState.pager
    };
  }
);
