import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IoneState, selectIsLoading, selectIsSidebarCollapsed, selectLoading } from '../../stores';
import { selectHasAlerts } from '../../stores/selectors/alert.selector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  isSidebarCollapsed = this.store.pipe(
    select(selectIsSidebarCollapsed),
    map(isSidebarCollapsed => {
      return {
        'is-collapsed': isSidebarCollapsed
      };
    }),
    takeUntil(this.destroyed$)
  );

  isLoading$ = this.store.pipe(
    select(selectIsLoading),
    takeUntil(this.destroyed$)
  );
  loading$ = this.store.pipe(
    select(selectLoading),
    takeUntil(this.destroyed$)
  );

  hasAlerts$ = this.store.pipe(
    select(selectHasAlerts),
    takeUntil(this.destroyed$)
  );

  constructor(
    private store: Store<IoneState>,
    private actions$: Actions,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
