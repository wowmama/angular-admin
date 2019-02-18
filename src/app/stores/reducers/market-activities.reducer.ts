import { IonePager } from 'src/app/ione/models/ione-pager.model';
import { QueryGroup } from 'src/app/ione/models/query.model';
import { QueryBuilder } from 'src/app/ione/services/query-builder.service';
import { MarketActivity } from 'src/app/models/market-activity.model';
import * as fromMarketActivities from '../actions/market-activities.action';

const qb = new QueryBuilder();
export interface MarketActivitiesState {
  pager: IonePager;
  marketActivities: MarketActivity[];
  query: QueryGroup;
}

export const initailMarketActivitiesState: MarketActivitiesState = {
  pager: {
    size: 100,
    page: 0,
    totalElements: 0,
    totalPages: 0,
    first: false,
    last: false,
  },
  query: qb.group({
    keywords: qb.control('', ['name', 'activityCode', 'remark']),
    status: qb.control('', ['status']),
    confirm: qb.control('', ['confirm']),
    startTime: qb.control('', ['startTime'], '', 'or', 'greaterThanOrEqualTo'),
    endTime: qb.control('', ['endTime'], '', 'or', 'lessThanOrEqualTo'),
  }),
  marketActivities: [],
};

export function reducer(
  state: MarketActivitiesState = initailMarketActivitiesState,
  action: fromMarketActivities.MarketActivitiesAction
): MarketActivitiesState {
  switch (action.type) {
    case fromMarketActivities.ActionTypes.InitMarketActivities: {
      return {
        ...initailMarketActivitiesState,
      };
    }
    case fromMarketActivities.ActionTypes.GetMarketActivities: {
      return {
        ...state,
        marketActivities: [],
        query: state.query.patchValue(action.payload.query)
      };
    }
    case fromMarketActivities.ActionTypes.GetMarketActivitiesSucceed: {
      return {
        ...state,
        marketActivities: [...action.payload.marketActivities],
        pager: { ...action.payload.pager }
      };
    }
  }
  return state;
}
