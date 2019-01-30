import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromLoading from './loading.reducer';
import * as fromMenu from './menu.reducer';
import * as fromToast from './toast.reducer';


export interface IoneState {
  menuState: fromMenu.MenuState;
  loadingState: fromLoading.LoadingState;
  toastState: fromToast.ToastState;
}

export const reducers: ActionReducerMap<IoneState> = {
  menuState: fromMenu.reducer,
  loadingState: fromLoading.reducer,
  toastState: fromToast.reducer,
};

export const selectIone = createFeatureSelector<IoneState>('ione');
