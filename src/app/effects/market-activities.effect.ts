import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { IonePager } from '../ione/models/ione-pager.model';
import { switchMapAndLoading } from '../ione/operators';
import { MarketActivity } from '../models/market-activity.model';
import { AppState, selectselectMarketActivitiesParams } from '../stores';
import { ActionTypes, GetMarketActivitiesSucceed } from '../stores/actions/market-activities.action';


@Injectable({
  providedIn: 'root'
})
export class MarketActivitiesEffect {

  @Effect() initMarketActivities$ = this.actions$.pipe(
    ofType(ActionTypes.InitMarketActivities, ActionTypes.GetMarketActivities),
    withLatestFrom(
      this.store.pipe(
        select(selectselectMarketActivitiesParams)
      )
    ),
    switchMapAndLoading(([action, params]) => {
      return this.getMarketActivities(params).pipe(
        map(results => {
          const marketActivities: MarketActivity[] = results.content;
          const pager: IonePager = {
            first: results.first,
            last: results.last,
            page: results.number,
            size: results.size,
            totalElements: results.totalElements,
            totalPages: results.totalPages,
          };
          return new GetMarketActivitiesSucceed(
            {
              marketActivities,
              pager,
            });
        }),
      );
    }, '努力加載中...')
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private httpClient: HttpClient
  ) { }
  getMarketActivities(params: any): Observable<any> {
    const fields = [
      'uuid',
      'activityCode',
      'approvalChannel',
      'approver',
      'billingCycle',
      'confirm',
      'creditCardCap',
      'creditCardRates',
      'endTime',
      'name',
      'remark',
      'settlementDate',
      'startTime',
      'status',
      'ticketFootnote',
    ];
    const query = {
      ...params,
      fields: fields.join(),
    };
    const url = 'http://project.angle-tech.com.tw:8866/api/v1/tsw-marketing-service/markets';
    return this.httpClient.get(url, {
      params: query,
    });
  }
}
