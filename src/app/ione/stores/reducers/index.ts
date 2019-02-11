import * as routerStore from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromLoading from './loading.reducer';
import * as fromMenu from './menu.reducer';
import * as fromTab from './tab.reducer';
import * as fromToast from './toast.reducer';


export interface IoneState {
  menuState: fromMenu.MenuState;
  tabState: fromTab.TabState;
  loadingState: fromLoading.LoadingState;
  toastState: fromToast.ToastState;
  router: routerStore.RouterReducerState;
}

export const reducers: ActionReducerMap<IoneState> = {
  menuState: fromMenu.reducer,
  tabState: fromTab.reducer,
  loadingState: fromLoading.reducer,
  toastState: fromToast.reducer,
  router: routerStore.routerReducer
};

export const selectIone = createFeatureSelector<IoneState>('ione');
