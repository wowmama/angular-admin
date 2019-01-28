import { Menu } from '../../models/menu.model';
import * as fromMenu from '../actions/menu.action';
export interface MenuState {
  isSidebarCollapsed: boolean;
  menus: Menu[];
  breadcrumbs: Menu[];
  tabs: Menu[];
  isAccountDropDownShow: boolean;
  isNotificationDropDownShow: boolean;
}

export const initailMenuState: MenuState = {
  isSidebarCollapsed: false,
  menus: [],
  breadcrumbs: [],
  tabs: [],
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
    case fromMenu.ActionTypes.ToggleSidebarItem: {
      return {
        ...state,
        menus: sidebarItemToggle(state.menus, action.activeUuid),
      };
    }
    case fromMenu.ActionTypes.AciteSidebarItem: {
      const results = activeSidebarItem(state.menus, action.activeUuid);
      return {
        ...state,
        menus: results.menus,
        tabs: addNewTab(state.tabs, results.activeMenu),
        breadcrumbs: getBreadcrumbs(state.menus, action.activeUuid)
      };
    }
    case fromMenu.ActionTypes.CloseTab: {
      const results = closeTab(state.tabs, action.closeUuid);
      return {
        ...state,
        menus: activeSidebarItem(state.menus, results.activeUuid).menus,
        tabs: results.tabs,
        breadcrumbs: getBreadcrumbs(state.menus, results.activeUuid)
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
function activeSidebarItem(menus: Menu[], activeUuid: string): { menus: Menu[], isOpen: boolean, activeMenu: Menu } {
  let isOpen = false;
  let activeMenu = null;
  const results = menus.map(menu => {
    if (menu.uuid === activeUuid) {
      isOpen = true;
      activeMenu = { ...menu };
      return {
        ...menu,
        active: true,
        open: !menu.open,
      };
    } else if (menu.subMenus && menu.subMenus.length > 0) {
      const subResult = activeSidebarItem(menu.subMenus, activeUuid);
      isOpen = isOpen ? isOpen : subResult.isOpen;
      activeMenu = subResult.activeMenu ? { ...subResult.activeMenu } : activeMenu;
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
  return { menus: results, isOpen, activeMenu };
}
function sidebarItemToggle(menus: Menu[], uuid: string): Menu[] {
  const mapFn = (m: Menu[], activeUuid: string): { menus: Menu[], isOpen: boolean } => {
    let isOpen = false;
    const results = m.map(menu => {
      if (menu.uuid === activeUuid) {
        isOpen = true;
        return {
          ...menu,
          open: !menu.open,
        };
      } else if (menu.subMenus && menu.subMenus.length > 0) {
        const subResult = mapFn(menu.subMenus, activeUuid);
        isOpen = isOpen ? isOpen : subResult.isOpen;
        return {
          ...menu,
          subMenus: subResult.menus,
          open: subResult.isOpen
        };
      } else {
        return {
          ...menu,
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

function addNewTab(tabs: Menu[], activeMenu: Menu): Menu[] {
  let isNewTabs = true;
  const newTabs = tabs.map(menu => {
    if (menu.uuid === activeMenu.uuid) {
      isNewTabs = false;
      return {
        ...menu,
        active: true
      };
    } else {
      return {
        ...menu,
        active: false
      };
    }
  });
  return isNewTabs ? [...newTabs, { ...activeMenu, active: true }] : newTabs;
}

function closeTab(tabs: Menu[], closeUuid: string): { tabs: Menu[], activeUuid: string } {
  // 取得当前tab的index
  const index = tabs.map(tab => tab.uuid).indexOf(closeUuid);
  const closeMenu: Menu = tabs[index];
  const newTabs = tabs.filter(tab => tab.uuid !== closeUuid);

  if (!closeMenu.active) {
    return { tabs: newTabs, activeUuid: newTabs.filter(menu => menu.active)[0].uuid };
  }

  let activeUuid: string = null;
  if (newTabs.length > index + 1) {
    newTabs[index] = { ...newTabs[index], active: true };
    activeUuid = newTabs[index].uuid;
  } else if (newTabs.length > 0) {
    newTabs[newTabs.length - 1] = { ...newTabs[newTabs.length - 1], active: true };
    activeUuid = newTabs[newTabs.length - 1].uuid;
  }
  return { tabs: newTabs, activeUuid };
}
