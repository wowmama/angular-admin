import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  Navigate = '[Router] Navigate',
}

export class Navigate implements Action {
  readonly type = ActionTypes.Navigate;
  constructor(
    public payload: {
      commands: any[], extras?: NavigationExtras
    }
  ) { }
}

export type LoadingAction = Navigate;

