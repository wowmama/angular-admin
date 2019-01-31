import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, map } from 'rxjs/operators';
import * as UUID from 'uuid';
import { Toast } from '../models/toast.model';
import { IoneState } from '../stores';
import { ActionTypes, AddToast, RemoveToast } from '../stores/actions/toast.action';
const defaultToast: Toast = {
  uuid: '',
  title: '',
  subTitle: '',
  body: '',
  type: '',
  handle: () => { },
};
@Injectable()
export class ToastService {
  @Effect() addToast$ = this.actions$.pipe(
    ofType(ActionTypes.AddToast),
    delay(3000),
    map((action: AddToast) => new RemoveToast(action.toast.uuid))
  );

  constructor(
    private actions$: Actions,
    private store: Store<IoneState>
  ) { }

  open(toast: Toast | string): string {
    const uuid: string = UUID.v4();
    if (typeof toast === 'string') {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, body: toast }));
    } else {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, ...toast }));
    }
    return uuid;
  }
  info(toast: Toast | string): string {
    const uuid: string = UUID.v4();
    if (typeof toast === 'string') {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, body: toast, type: 'info' }));
    } else {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, ...toast, type: 'info' }));
    }
    return uuid;
  }
  warning(toast: Toast | string): string {
    const uuid: string = UUID.v4();
    if (typeof toast === 'string') {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, body: toast, type: 'warning' }));
    } else {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, ...toast, type: 'warning' }));
    }
    return uuid;
  }
  success(toast: Toast | string): string {
    const uuid: string = UUID.v4();
    if (typeof toast === 'string') {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, body: toast, type: 'success' }));
    } else {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, ...toast, type: 'success' }));
    }
    return uuid;
  }
  danger(toast: Toast | string): string {
    const uuid: string = UUID.v4();
    if (typeof toast === 'string') {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, body: toast, type: 'danger' }));
    } else {
      this.store.dispatch(new AddToast({ ...defaultToast, uuid, ...toast, type: 'danger' }));
    }
    return uuid;
  }

}
