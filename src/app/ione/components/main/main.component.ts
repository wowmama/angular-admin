import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IoneState, selectIsSidebarCollapsed } from '../../stores';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
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
  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
