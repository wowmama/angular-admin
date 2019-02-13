import { IonePager } from 'src/app/ione/models/ione-pager.model';
import { IoneQueryBuilder, IoneQueryControl } from 'src/app/ione/models/ione-query.model';
import { MarketActivity } from 'src/app/models/market-activity.model';
import * as fromMarketActivities from '../actions/market-activities.action';
export interface MarketActivitiesState {
  pager: IonePager;
  marketActivities: MarketActivity[];
  query: {
    keywords: IoneQueryControl,
    status: IoneQueryControl,
    confirm: IoneQueryControl,
    startTime: IoneQueryControl,
    endTime: IoneQueryControl,
  };
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
  query: {
    keywords: IoneQueryBuilder.control('', ['name', 'activityCode', 'remark']),
    status: IoneQueryBuilder.control('', ['status']),
    confirm: IoneQueryBuilder.control('', ['confirm']),
    startTime: IoneQueryBuilder.control('', ['startTime']),
    endTime: IoneQueryBuilder.control('', ['endTime']),
  },
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
        query: {
          ...state.query,
          ...action.payload.query
        }
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
