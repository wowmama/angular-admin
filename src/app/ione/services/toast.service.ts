import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, map } from 'rxjs/operators';
import * as UUID from 'uuid';
import { Toast } from '../models/toast.model';
import { IoneState } from '../stores';
import { ActionTypes, AddToast, RemoveToast } from '../stores/actions/toast.action';

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

  open(toast: Toast): string {
    const uuid: string = UUID.v4();
    this.store.dispatch(new AddToast({ uuid, ...toast }));
    return uuid;
  }

  dismiss(uuid: string) {
    this.store.dispatch(new RemoveToast(uuid));
  }
}
