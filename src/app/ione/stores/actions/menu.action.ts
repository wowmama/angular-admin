import { Action } from '@ngrx/store';
import { Menu } from '../../models/menu.model';

export enum ActionTypes {
  LoadMenus = '[Menu] Load menus',
  AciteSidebarItem = '[Menu] Active sidebar item',
  ToggleSidebarItem = '[Menu] Toggle sidebar item',
  CloseTab = '[Menu] Close tab',
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
export class AciteSidebarItem {
  readonly type = ActionTypes.AciteSidebarItem;
  constructor(
    public activeUuid: string
  ) {
  }
}
export class ToggleSidebarItem {
  readonly type = ActionTypes.ToggleSidebarItem;
  constructor(
    public activeUuid: string
  ) {
  }
}
export class CloseTab {
  readonly type = ActionTypes.CloseTab;
  constructor(
    public closeUuid: string
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
  | AciteSidebarItem
  | ToggleSidebarItem
  | CloseTab
  | ToggleSidebar
  | OpenNotificationsDropdownMenu
  | CloseNotificationsDropdownMenu
  | OpenAccountInfoDropdownMenu
  | CloseAccountInfoDropdownMenu;

