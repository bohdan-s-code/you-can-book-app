// BOOK_FORM
import { StepperSteps } from './enums';

export const SET_SERVICE_CHECKED = 'SET_SERVICE_CHECKED';
export const UNCHECK_ALL_SERVICES = 'UNCHECK_ALL_SERVICES';
export const SELECT_SPECIALIST = 'SELECT_SPECIALIST';
export const SET_BOOKING_DATE = 'SET_BOOKING_DATE';
export const SET_TIMESLOT_SELECTED = 'SET_TIMESLOT_SELECTED';
export const CLEAR_DATE_SELECTED = 'CLEAR_DATE_SELECTED';

export type SetServiceChecked = {
  type: typeof SET_SERVICE_CHECKED;
  parentId: string;
  serviceId: string;
};

export type UncheckAllServices = {
  type: typeof UNCHECK_ALL_SERVICES;
};

export type SelectSpecialist = {
  type: typeof SELECT_SPECIALIST;
  id: string;
};

export type SetBookingDate = {
  type: typeof SET_BOOKING_DATE;
  date: Date;
};

export type SetTimeslotSelected = {
  type: typeof SET_TIMESLOT_SELECTED;
  id: string;
};

export type ClearDateSelected = {
  type: typeof CLEAR_DATE_SELECTED;
};

export type FormActionTypes =
  | SetServiceChecked
  | UncheckAllServices
  | SelectSpecialist
  | SetBookingDate
  | SetTimeslotSelected
  | ClearDateSelected;

// STEPPER
export const SET_NEXT_STEP = 'SET_NEXT_STEP';
export const SET_PREVIOUS_STEP = 'SET_PREVIOUS_STEP';
export const SET_CUSTOM_STEP = 'SET_CUSTOM_STEP';

export type SetNextStep = {
  type: typeof SET_NEXT_STEP;
};

export type SetPreviousStep = {
  type: typeof SET_PREVIOUS_STEP;
};

export type SetCustomStep = {
  type: typeof SET_CUSTOM_STEP;
  step: StepperSteps;
};

export type StepperActionTypes = SetNextStep | SetPreviousStep | SetCustomStep;
