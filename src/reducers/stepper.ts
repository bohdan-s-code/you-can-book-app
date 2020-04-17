import { StepperState } from '../core/types';
import {
  SET_CUSTOM_STEP,
  SET_NEXT_STEP,
  SET_PREVIOUS_STEP,
  StepperActionTypes,
} from '../core/action-types';
import { StepperSteps } from '../core/enums';

const initialState: StepperState = {
  step: StepperSteps.Services,
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
    case SET_CUSTOM_STEP:
      return { ...state, step: action.step };
    default:
      return state;
  }
};
