export const SET_FORM_STEP = 'SELECT_STEP';

interface SetFormStep {
  type: typeof SET_FORM_STEP;
  payload: number;
}

export type FormActionTypes = SetFormStep;
