import {
  CLEAR_DATE_SELECTED,
  FormActionTypes,
  SELECT_SPECIALIST,
  SET_BOOKING_DATE,
  SET_NEXT_STEP,
  SET_PREVIOUS_STEP,
  SET_SERVICE_CHECKED,
  SET_TIMESLOT_SELECTED,
  UNCHECK_ALL_SERVICES,
} from './core/action-types';

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

export const setTimeslotSelected = (id: string) => ({
  type: SET_TIMESLOT_SELECTED,
  id,
});

export const clearDateSelected = () => ({
  type: CLEAR_DATE_SELECTED,
});

// STEPPER
export const setNextStep = () => ({
  type: SET_NEXT_STEP,
});
export const setPreviousStep = () => ({
  type: SET_PREVIOUS_STEP,
});
