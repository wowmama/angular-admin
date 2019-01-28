import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IoneState, selectIsCollapsed } from '../../stores';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  isCollapsed = this.store.pipe(
    select(selectIsCollapsed),
    map(isCollapsed => {
      return {
        'is-collapsed': isCollapsed
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
