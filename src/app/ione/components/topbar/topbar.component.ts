import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { IoneState } from '../../stores';
import { ToggleSidebar } from '../../stores/actions/menu.action';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

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
