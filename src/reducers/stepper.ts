import { StepperState } from '../core/types';
import {
  SET_NEXT_STEP,
  SET_PREVIOUS_STEP,
  StepperActionTypes,
} from '../core/action-types';

const initialState: StepperState = {
  step: 0,
};

export const stepperReducer = (
  state = initialState,
  action: StepperActionTypes
): StepperState => {
  switch (action.type) {
    case SET_NEXT_STEP:
      return { ...state, step: state.step + 1 };
    case SET_PREVIOUS_STEP:
      return { ...state, step: state.step - 1 };
    default:
      return state;
  }
};
