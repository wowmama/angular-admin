import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddLoading = '[Loading] Add loading',
  RemoveLoading = '[Loading] Remove loading',
}

export class AddLoading implements Action {
  readonly type = ActionTypes.AddLoading;
  constructor(
    public payload: {
      text: string,
      uuid: string,
    }
  ) { }
}
export class RemoveLoading implements Action {
  readonly type = ActionTypes.RemoveLoading;
  constructor(
    public uuid: string,
  ) { }
}


export type LoadingAction = AddLoading
  | RemoveLoading;

