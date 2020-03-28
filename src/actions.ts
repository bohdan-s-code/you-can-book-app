import { FormActionTypes, SET_FORM_STEP } from './core/action-types';

export const setFormStep = (newStep: number): FormActionTypes => ({
  type: SET_FORM_STEP,
  payload: newStep,
});
