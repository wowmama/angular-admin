import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { IoneState, selectBreadcrumbs } from '../../stores';
import { ToggleSidebar } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  breadcrumbs: Observable<Menu[]> = this.store.pipe(
    select(selectBreadcrumbs),
    takeUntil(this.destroyed$)
  );

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }
  handleSidebarToggleClick() {
    this.store.dispatch(new ToggleSidebar());
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
