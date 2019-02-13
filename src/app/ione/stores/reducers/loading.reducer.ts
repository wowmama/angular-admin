import { Loading } from '../../models/loading.model';
import * as fromLoading from '../actions/loading.action';
export interface LoadingState {
  loadings: Loading[];
}

export const initailLoadingState: LoadingState = {
  loadings: [],
};

export function reducer(
  state: LoadingState = initailLoadingState,
  action: fromLoading.LoadingAction
): LoadingState {
  switch (action.type) {
    case fromLoading.ActionTypes.AddLoading: {
      const loading: Loading = {
        uuid: action.payload.uuid,
        text: action.payload.text
      };
      return {
        ...state,
        loadings: [loading, ...state.loadings]
      };
    }
    case fromLoading.ActionTypes.RemoveLoading: {
      return {
        ...state,
        loadings: state.loadings.filter(v => v.uuid !== action.uuid)
      };
    }
  }
  return state;
}
