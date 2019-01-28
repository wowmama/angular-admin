import { Menu } from '../../models/menu.model';
import * as fromMenu from '../actions/menu.action';
export interface MenuState {
  isSidebarCollapsed: boolean;
  menus: Menu[];
  breadcrumbs: Menu[];
  isAccountDropDownShow: boolean;
  isNotificationDropDownShow: boolean;
}

export const initailMenuState: MenuState = {
  isSidebarCollapsed: false,
  menus: [],
  breadcrumbs: [],
  isAccountDropDownShow: false,
  isNotificationDropDownShow: false
};

export function reducer(
  state: MenuState = initailMenuState,
  action: fromMenu.MenuAction
): MenuState {
  switch (action.type) {
    case fromMenu.ActionTypes.LoadMenus: {
      return {
        ...state,
        menus: action.menus
      };
    }
    case fromMenu.ActionTypes.SidebarChange: {
      return {
        ...state,
        menus: mapNewMenus(state.menus, action.activeUuid),
        breadcrumbs: getBreadcrumbs(state.menus, action.activeUuid)
      };
    }
    case fromMenu.ActionTypes.ToggleSidebar: {
      return {
        ...state,
        isSidebarCollapsed: !state.isSidebarCollapsed
      };
    }
    case fromMenu.ActionTypes.OpenNotificationsDropdownMenu: {
      return {
        ...state,
        isNotificationDropDownShow: true
      };
    }
    case fromMenu.ActionTypes.CloseNotificationsDropdownMenu: {
      return {
        ...state,
        isNotificationDropDownShow: false
      };
    }
    case fromMenu.ActionTypes.OpenAccountInfoDropdownMenu: {
      return {
        ...state,
        isAccountDropDownShow: true
      };
    }
    case fromMenu.ActionTypes.CloseAccountInfoDropdownMenu: {
      return {
        ...state,
        isAccountDropDownShow: false
      };
    }
  }
  return state;
}

// 取得新的menu狀態
function mapNewMenus(menus: Menu[], uuid: string): Menu[] {
  const mapFn = (m: Menu[], activeUuid: string): { menus: Menu[], isOpen: boolean } => {
    let isOpen = false;
    const results = m.map(menu => {
      if (menu.uuid === activeUuid) {
        isOpen = true;
        return {
          ...menu,
          active: true,
          open: !menu.open,
        };
      } else if (menu.subMenus && menu.subMenus.length > 0) {
        const subResult = mapFn(menu.subMenus, activeUuid);
        isOpen = isOpen ? isOpen : subResult.isOpen;
        return {
          ...menu,
          subMenus: subResult.menus,
          active: false,
          open: subResult.isOpen
        };
      } else {
        return {
          ...menu,
          active: false,
          open: false
        };
      }
    });
    return { menus: results, isOpen: isOpen };
  };
  return mapFn(menus, uuid).menus;
}

// 取得麵包屑
function getBreadcrumbs(menus: Menu[], uuid: string): Menu[] {
  const searchFn = (m: Menu[], activeUuid: string): Menu[] => {
    let results = null;
    for (let i = 0; i < m.length; i++) {
      const menu = m[i];
      if (menu.uuid === activeUuid) {
        results = [menu];
        break;
      } else if (menu.subMenus && menu.subMenus.length > 0) {
        const searchMenus = searchFn(menu.subMenus, activeUuid);
        results = searchMenus.length > 0 ? [menu, ...searchMenus] : [];
        if (results.length > 0) {
          break;
        }
      } else {
        results = [];
      }
    }
    return results;
  };
  return searchFn(menus, uuid);
}
