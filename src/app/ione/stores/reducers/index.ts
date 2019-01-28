import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMenu from './menu.reducer';


export interface IoneState {
  menuState: fromMenu.MenuState;
}

export const reducers: ActionReducerMap<IoneState> = {
  menuState: fromMenu.reducer,
};

export const selectIone = createFeatureSelector<IoneState>('ione');

// Menu state
export const selectMenuState = createSelector(
  selectIone,
  ioneState => ioneState.menuState
);
export const selectMenus = createSelector(
  selectMenuState,
  menuState => menuState.menus
);
export const selectIsCollapsed = createSelector(
  selectMenuState,
  menuState => menuState.isCollapsed
);
