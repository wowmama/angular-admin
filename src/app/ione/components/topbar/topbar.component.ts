import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IoneState, selectBreadcrumbs, selectIsAccountDropDownShow, selectIsNotificationAndAccountDropDownShow, selectIsNotificationDropDownShow } from '../../stores';
import { CloseAccountInfoDropdownMenu, CloseNotificationsDropdownMenu, OpenAccountInfoDropdownMenu, OpenNotificationsDropdownMenu, ToggleSidebar } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit, OnDestroy {

  @ViewChild('notifications') notifications: ElementRef;
  @ViewChild('accountInfo') accountInfo: ElementRef;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  breadcrumbs: Observable<string[]> = this.store.pipe(
    select(selectBreadcrumbs),
    takeUntil(this.destroyed$)
  );

  isAccountInfoShow$ = this.store.pipe(
    select(selectIsAccountDropDownShow),
    map(isShow => {
      return {
        show: isShow
      };
    })
  );
  isNotificationShow$ = this.store.pipe(
    select(selectIsNotificationDropDownShow),
    map(isShow => {
      return {
        show: isShow
      };
    })
  );

  isAccountShow: boolean;
  isNotificationShow: boolean;

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(selectIsNotificationAndAccountDropDownShow),
      takeUntil(this.destroyed$)
    ).subscribe(({ isAccountShow, isNotificationShow }) => {
      this.isAccountShow = isAccountShow;
      this.isNotificationShow = isNotificationShow;
    });
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
    if (this.isNotificationShow) {
      this.store.dispatch(new CloseNotificationsDropdownMenu());
    }
  }
  handleAccountInfoClose() {
    if (this.isAccountShow) {
      this.store.dispatch(new CloseAccountInfoDropdownMenu());
    }
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
