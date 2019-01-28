import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { IoneState, selectMenus } from '../../stores';
import { ToggleSidebar } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  menus: Observable<Menu[]> = this.store.pipe(
    select(selectMenus),
    takeUntil(this.destroyed$)
  );

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }

  handleCloseSidebar() {
    this.store.dispatch(new ToggleSidebar());
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
