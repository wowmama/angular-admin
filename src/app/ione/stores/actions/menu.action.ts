import { Action } from '@ngrx/store';
import { Menu } from '../../models/menu.model';

export enum ActionTypes {
  LoadMenus = '[Menu] Load menus',
  SidebarChange = '[Menu] Sidebar change',
  ToggleSidebar = '[Menu] Toggle sidebar',
}

export class LoadMenus implements Action {
  readonly type = ActionTypes.LoadMenus;
  constructor(
    public menus: Menu[]
  ) { }
}
export class SidebarChange {
  readonly type = ActionTypes.SidebarChange;
  constructor(
    public activeUuid: string
  ) {
  }
}
export class ToggleSidebar implements Action {
  readonly type = ActionTypes.ToggleSidebar;
}


export type MenuAction = LoadMenus
  | SidebarChange
  | ToggleSidebar;
