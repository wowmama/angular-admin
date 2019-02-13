import { Action } from '@ngrx/store';
import { IonePager } from 'src/app/ione/models/ione-pager.model';
import { IoneQueryControl } from 'src/app/ione/models/ione-query.model';
import { MarketActivity } from 'src/app/models/market-activity.model';

export enum ActionTypes {
  InitMarketActivities = '[Market Activities] Init market activities',
  GetMarketActivities = '[Market Activities] Get market activities',
  GetMarketActivitiesSucceed = '[Market Activities] Get market activities succeed',
}

export class InitMarketActivities implements Action {
  readonly type = ActionTypes.InitMarketActivities;
  constructor() { }
}
export class GetMarketActivities implements Action {
  readonly type = ActionTypes.GetMarketActivities;
  constructor(
    public payload: {
      query: {
        keywords?: IoneQueryControl,
        status?: IoneQueryControl,
        confirm?: IoneQueryControl,
        startTime?: IoneQueryControl,
        endTime?: IoneQueryControl,
      }
    }
  ) { }
}
export class GetMarketActivitiesSucceed implements Action {
  readonly type = ActionTypes.GetMarketActivitiesSucceed;
  constructor(
    public payload: {
      marketActivities: MarketActivity[],
      pager: IonePager
    }
  ) { }
}


export type MarketActivitiesAction = InitMarketActivities
  | GetMarketActivities
  | GetMarketActivitiesSucceed;

