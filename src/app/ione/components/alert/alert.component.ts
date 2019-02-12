import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Alert } from '../../models/alert.model';
import { IoneState } from '../../stores';
import { PopAlert } from '../../stores/actions/alert.action';
import { selectAlert } from '../../stores/selectors/alert.selector';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  alert$ = this.store.pipe(
    select(selectAlert),
    takeUntil(this.destroyed$)
  );

  constructor(
    private store: Store<IoneState>
  ) { }

  ngOnInit() {
  }

  handleCancelClick(alert: Alert) {
    this.store.dispatch(new PopAlert());
    if (typeof alert.cancle === 'function') {
      alert.cancle();
    }
  }

  handleButtonClick(button: {
    text: string,
    cssClass?: string,
    handler?: () => void
  }, alert: Alert) {
    this.store.dispatch(new PopAlert());
    if (typeof button.handler === 'function') {
      button.handler();
    }
    if (typeof alert.dismiss === 'function') {
      alert.dismiss(button.text);
    }
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
