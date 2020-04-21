import {
  CLEAR_DATE_SELECTED,
  FormActionTypes,
  SELECT_SPECIALIST,
  SET_BOOKING_DATE,
  SET_CUSTOM_STEP,
  SET_NEXT_STEP,
  SET_PREVIOUS_STEP,
  SET_SERVICE_CHECKED,
  SET_TIMESLOT_SELECTED,
  SET_USER_INFO_VALUES,
  StepperActionTypes,
  UNCHECK_ALL_SERVICES,
} from './core/action-types';
import { StepperSteps } from './core/enums';
import { UserInfoFormValues } from './core/types';

// BOOK_FORM
export const setServiceChecked = (
  parentId: string,
  serviceId: string
): FormActionTypes => ({
  type: SET_SERVICE_CHECKED,
  parentId,
  serviceId,
});

export const uncheckAllServices = () => ({
  type: UNCHECK_ALL_SERVICES,
});

export const selectSpecialist = (id: string): FormActionTypes => ({
  type: SELECT_SPECIALIST,
  id,
});

export const setBookingDate = (date: Date): FormActionTypes => ({
  type: SET_BOOKING_DATE,
  date,
});

export const setTimeslotSelected = (id: string): FormActionTypes => ({
  type: SET_TIMESLOT_SELECTED,
  id,
});

export const clearDateSelected = (): FormActionTypes => ({
  type: CLEAR_DATE_SELECTED,
});

export const setUserInfoValues = (
  formValues: UserInfoFormValues
): FormActionTypes => ({
  type: SET_USER_INFO_VALUES,
  payload: formValues,
});

// STEPPER
export const setNextStep = (): StepperActionTypes => ({
  type: SET_NEXT_STEP,
});

export const setPreviousStep = (): StepperActionTypes => ({
  type: SET_PREVIOUS_STEP,
});

export const setCustomStep = (step: StepperSteps): StepperActionTypes => ({
  type: SET_CUSTOM_STEP,
  step,
});
