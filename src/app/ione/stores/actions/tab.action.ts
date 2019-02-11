import { Action } from '@ngrx/store';
import { Tab } from '../../models/tab.model';

export enum ActionTypes {
  AddTab = '[Tab] Add tab',
  CloseTab = '[Tab] Close tab',
}

export class AddTab implements Action {
  readonly type = ActionTypes.AddTab;
  constructor(
    public payload: { tab: Tab }
  ) { }
}
export class CloseTab implements Action {
  readonly type = ActionTypes.CloseTab;
  constructor(
    public payload: { tab: Tab }
  ) { }
}




export type TabAction = AddTab
  | CloseTab;
