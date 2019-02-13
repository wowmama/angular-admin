import { Toast } from '../../models/toast.model';
import * as fromToast from '../actions/toast.action';
export interface ToastState {
  toasts: Toast[];
}

export const initailToastState: ToastState = {
  toasts: [],
};

export function reducer(
  state: ToastState = initailToastState,
  action: fromToast.ToastAction
): ToastState {
  switch (action.type) {
    case fromToast.ActionTypes.AddToast: {
      return {
        ...state,
        toasts: [...state.toasts, action.payload]
      };
    }
    case fromToast.ActionTypes.RemoveToast: {
      return {
        ...state,
        toasts: state.toasts.filter(v => v.uuid !== action.payload.uuid)
      };
    }
  }
  return state;
}
