import { Action } from '@ngrx/store';
import { Alert } from '../../models/alert.model';

export enum ActionTypes {
  PushAlert = '[Alert] Push alert',
  PopAlert = '[Alert] Pop alert',
}

export class PushAlert implements Action {
  readonly type = ActionTypes.PushAlert;
  constructor(
    public payload: {
      alert: Alert
    }
  ) { }
}
export class PopAlert implements Action {
  readonly type = ActionTypes.PopAlert;
  constructor() { }
}


export type AlertAction = PushAlert
  | PopAlert;

