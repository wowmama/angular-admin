import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { IonePage } from '../decorators/ione-page.decorator';
import { Tab } from '../models/tab.model';
import { RouterStateUrl } from '../router/custom-route-serializer';
import { IoneState, selectActiveTab } from '../stores';
import { AciteSidebarItem, UpdateBreadcrumbs } from '../stores/actions/menu.action';
import * as fromRouter from '../stores/actions/router.action';
import * as fromTab from '../stores/actions/tab.action';
import { AddTab } from '../stores/actions/tab.action';

@Injectable({
  providedIn: 'root'
})
export class RouterEffect {

  @Effect()
  router$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap((action: any) => {
      let pageName = '';
      let url = '/';
      let breadcrumbs = [];
      if (typeof action.payload.routerState.component.ionePageDecorator === 'function') {
        const routerStateUrl: RouterStateUrl = action.payload.routerState;
        const ionePage: IonePage = routerStateUrl.component.ionePageDecorator();
        pageName = ionePage.name;
        url = routerStateUrl.url;
        breadcrumbs = ionePage.breadcrumbs;
        return [
          new AciteSidebarItem(pageName),
          new UpdateBreadcrumbs({
            breadcrumbs: breadcrumbs
          }),
          new AddTab({
            tab: {
              name: pageName,
              url: url
            }
          }),
        ];
      }
      return [
        new AciteSidebarItem(pageName),
        new UpdateBreadcrumbs({
          breadcrumbs: breadcrumbs
        }),
      ];
    })
  );

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(fromRouter.ActionTypes.Navigate),
    tap((action: fromRouter.Navigate) => {
      this.router.navigate(action.payload.commands, action.payload.extras);
    })
  );

  @Effect()
  closeTab$ = this.actions$.pipe(
    ofType(fromTab.ActionTypes.CloseTab),
    withLatestFrom(
      this.store.pipe(select(selectActiveTab))
    ),
    map((results: [fromTab.CloseTab, Tab]) => {
      const tab = results[1];
      return new fromRouter.Navigate({
        commands: [tab ? tab.url : '']
      });
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<IoneState>,
    private router: Router
  ) { }

}
