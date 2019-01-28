import { Action } from '@ngrx/store';
import { Menu } from '../../models/menu.model';

export enum ActionTypes {
  LoadMenus = '[Menu] Load menus',
  SidebarChange = '[Menu] Sidebar change',
  ToggleSidebar = '[Menu] Toggle sidebar',
  OpenNotificationsDropdownMenu = '[Menu] Open notifications dropdown menu',
  CloseNotificationsDropdownMenu = '[Menu] Close notifications dropdown menu',
  OpenAccountInfoDropdownMenu = '[Menu] Open accountInfo dropdown menu',
  CloseAccountInfoDropdownMenu = '[Menu] Close accountInfo dropdown menu',
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
export class OpenNotificationsDropdownMenu implements Action {
  readonly type = ActionTypes.OpenNotificationsDropdownMenu;
}
export class CloseNotificationsDropdownMenu implements Action {
  readonly type = ActionTypes.CloseNotificationsDropdownMenu;
}
export class OpenAccountInfoDropdownMenu implements Action {
  readonly type = ActionTypes.OpenAccountInfoDropdownMenu;
}
export class CloseAccountInfoDropdownMenu implements Action {
  readonly type = ActionTypes.CloseAccountInfoDropdownMenu;
}




export type MenuAction = LoadMenus
  | SidebarChange
  | ToggleSidebar
  | OpenNotificationsDropdownMenu
  | CloseNotificationsDropdownMenu
  | OpenAccountInfoDropdownMenu
  | CloseAccountInfoDropdownMenu;

