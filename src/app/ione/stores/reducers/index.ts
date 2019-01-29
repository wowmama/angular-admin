import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromLoading from './loading.reducer';
import * as fromMenu from './menu.reducer';


export interface IoneState {
  menuState: fromMenu.MenuState;
  loadingState: fromLoading.LoadingState;
}

export const reducers: ActionReducerMap<IoneState> = {
  menuState: fromMenu.reducer,
  loadingState: fromLoading.reducer,
};

export const selectIone = createFeatureSelector<IoneState>('ione');
