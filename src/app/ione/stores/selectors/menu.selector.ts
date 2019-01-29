import { createSelector } from '@ngrx/store';
import { selectIone } from '../reducers';

// Menu state
export const selectMenuState = createSelector(
  selectIone,
  ioneState => ioneState.menuState
);
export const selectMenus = createSelector(
  selectMenuState,
  menuState => menuState.menus
);
export const seleceTabs = createSelector(
  selectMenuState,
  menuState => {
    return menuState.tabs.map(tab => {
      return {
        ...tab,
        class: {
          active: tab.active
        }
      };
    });
  },
);
export const selectIsSidebarCollapsed = createSelector(
  selectMenuState,
  menuState => menuState.isSidebarCollapsed
);
export const selectBreadcrumbs = createSelector(
  selectMenuState,
  menuState => menuState.breadcrumbs
);
export const selectIsAccountDropDownShow = createSelector(
  selectMenuState,
  menuState => menuState.isAccountDropDownShow
);
export const selectIsNotificationDropDownShow = createSelector(
  selectMenuState,
  menuState => menuState.isNotificationDropDownShow
);
