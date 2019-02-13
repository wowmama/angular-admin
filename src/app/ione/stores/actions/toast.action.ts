import { Action } from '@ngrx/store';
import { Toast } from '../../models/toast.model';

export enum ActionTypes {
  AddToast = '[Toast] Add toast',
  RemoveToast = '[Toast] Remove toast',
}

export class AddToast implements Action {
  readonly type = ActionTypes.AddToast;
  constructor(
    public payload: Toast
  ) { }
}
export class RemoveToast implements Action {
  readonly type = ActionTypes.RemoveToast;
  constructor(
    public payload: { uuid: string }
  ) { }
}



export type ToastAction = AddToast
  | RemoveToast;

