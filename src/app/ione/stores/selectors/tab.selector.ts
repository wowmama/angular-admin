import { createSelector } from '@ngrx/store';
import { selectIone } from '../reducers';

// Menu state
export const selectTabState = createSelector(
  selectIone,
  ioneState => ioneState.tabState
);
export const seleceTabs = createSelector(
  selectTabState,
  tabState => {
    return tabState.tabs.map(tab => {
      return {
        ...tab,
        class: {
          active: tab.active
        }
      };
    });
  },
);

export const selectActiveTab = createSelector(
  seleceTabs,
  tabs => {
    const activeTabs = tabs.filter(tab => tab.active);
    return activeTabs.length > 0 ? activeTabs[0] : null;
  }
);
