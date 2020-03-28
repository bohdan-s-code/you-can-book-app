import { FormState } from '../core/types';
import { FormActionTypes, SET_FORM_STEP } from '../core/action-types';

const initialState: FormState = {
  step: 0,
};

export const formReducer = (
  state = initialState,
  action: FormActionTypes
): FormState => {
  switch (action.type) {
    case SET_FORM_STEP:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};