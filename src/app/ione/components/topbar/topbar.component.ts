import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Menu } from '../../models/menu.model';
import { IoneState, selectBreadcrumbs, selectIsAccountDropDownShow, selectIsNotificationDropDownShow } from '../../stores';
import { CloseAccountInfoDropdownMenu, CloseNotificationsDropdownMenu, OpenAccountInfoDropdownMenu, OpenNotificationsDropdownMenu, ToggleSidebar } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {

  @ViewChild('notifications') notifications: ElementRef;
  @ViewChild('accountInfo') accountInfo: ElementRef;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  breadcrumbs: Observable<Menu[]> = this.store.pipe(
    select(selectBreadcrumbs),
    takeUntil(this.destroyed$)
  );

  isAccountInfoShow = this.store.pipe(
    select(selectIsAccountDropDownShow),
    map(isShow => {
      return {
        show: isShow
      };
    })
  );
  isNotificationShow = this.store.pipe(
    select(selectIsNotificationDropDownShow),
    map(isShow => {
      return {
        show: isShow
      };
    })
  );

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }
  handleSidebarToggleClick() {
    this.store.dispatch(new ToggleSidebar());
  }
  handleNotificationsClick() {
    this.store.dispatch(new OpenNotificationsDropdownMenu());
  }
  handleAccountInfoClick() {
    this.store.dispatch(new OpenAccountInfoDropdownMenu());
  }
  handleNotificationsClose() {
    this.store.dispatch(new CloseNotificationsDropdownMenu());
  }
  handleAccountInfoClose() {
    this.store.dispatch(new CloseAccountInfoDropdownMenu());
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
