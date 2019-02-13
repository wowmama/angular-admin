import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { ActionTypes, AddToast, RemoveToast } from '../stores/actions/toast.action';

@Injectable({
  providedIn: 'root'
})
export class ToastEffect {

  @Effect() addToast$ = this.actions$.pipe(
    ofType(ActionTypes.AddToast),
    delay(7000),
    map((action: AddToast) => new RemoveToast({ uuid: action.payload.uuid }))
  );

  constructor(
    private actions$: Actions,
  ) { }

}
