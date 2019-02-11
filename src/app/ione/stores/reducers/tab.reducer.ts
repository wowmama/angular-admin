import { Tab } from '../../models/tab.model';
import * as fromTab from '../actions/tab.action';
export interface TabState {
  tabs: Tab[];
}

export const initailTabState: TabState = {
  tabs: [],
};

export function reducer(
  state: TabState = initailTabState,
  action: fromTab.TabAction
): TabState {
  switch (action.type) {
    case fromTab.ActionTypes.AddTab: {
      return {
        ...state,
        tabs: addAndUpdateTabs(state.tabs, action.payload.tab),
      };
    }
    case fromTab.ActionTypes.CloseTab: {
      return {
        ...state,
        tabs: closeAndUpdateTab(state.tabs, action.payload.tab.name)
      };
    }
  }
  return state;
}

function addAndUpdateTabs(tabs: Tab[], tab: Tab): Tab[] {
  let isNewTab = true;
  const newTabs = tabs.map(t => {
    if (isNewTab) {
      isNewTab = t.name !== tab.name;
    }
    return {
      ...t,
      active: t.name === tab.name
    };
  });
  return isNewTab ? [...newTabs, { ...tab, active: true }] : [...newTabs];
}

function closeAndUpdateTab(tabs: Tab[], name: string): Tab[] {
  // 取得当前tab的index
  const index = tabs.map(tab => tab.name).indexOf(name);
  const closeTab: Tab = tabs[index];
  const newTabs = tabs.filter(tab => tab.name !== name);

  if (!closeTab.active) {
    return newTabs;
  }

  if (newTabs.length > index + 1) {
    newTabs[index] = { ...newTabs[index], active: true };
  } else if (newTabs.length > 0) {
    newTabs[newTabs.length - 1] = { ...newTabs[newTabs.length - 1], active: true };
  }
  return newTabs;
}
