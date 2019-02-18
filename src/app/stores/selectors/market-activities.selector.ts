import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketActivitiesState } from '../reducers/market-activities.reducer';

export const selectMarketActivitiesState = createFeatureSelector<MarketActivitiesState>('marketActivitiesState');

export const selectMarketActivities = createSelector(
  selectMarketActivitiesState,
  marketActivitiesState => marketActivitiesState.marketActivities
);

export const selectMarketActivitiesQuerys = createSelector(
  selectMarketActivitiesState,
  marketActivitiesState => marketActivitiesState.query
);

export const selectselectMarketActivitiesParams = createSelector(
  selectMarketActivitiesState,
  marketActivitiesState => {
    const params = marketActivitiesState.query.params;
    console.log(params);
    return {
      ...params,
      ...marketActivitiesState.pager
    };
  }
);
