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
export const selectIsNotificationAndAccountDropDownShow = createSelector(
  selectIsAccountDropDownShow,
  selectIsNotificationDropDownShow,
  (isAccountShow, isNotificationShow) => {
    return { isAccountShow, isNotificationShow };
  }
);
