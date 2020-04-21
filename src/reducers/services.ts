import { FormState } from '../core/types';
import {
  CLEAR_DATE_SELECTED,
  FormActionTypes,
  SELECT_SPECIALIST,
  SET_BOOKING_DATE,
  SET_SERVICE_CHECKED,
  SET_TIMESLOT_SELECTED,
  SET_USER_INFO_VALUES,
  UNCHECK_ALL_SERVICES,
} from '../core/action-types';
import {
  servicesFormData,
  specialists,
  timeSlots,
  userInfoInitialFormValues,
} from '../core/mock-data';
import {
  setServiceItemChecked,
  setSpecialistSelected,
  setTimeslotSelected,
  unselectTimeslot,
} from '../utils/services-utils';

const initialState: FormState = {
  services: servicesFormData,
  specialists: specialists,
  selectedDate: new Date(),
  timeSlots: timeSlots,
  userInfo: userInfoInitialFormValues,
};

export const servicesReducer = (
  state = initialState,
  action: FormActionTypes
): FormState => {
  switch (action.type) {
    case SET_SERVICE_CHECKED:
      return {
        ...state,
        services: setServiceItemChecked(
          state.services,
          action.parentId,
          action.serviceId
        ),
      };
    case UNCHECK_ALL_SERVICES:
      return {
        ...state,
        services: servicesFormData,
      };
    case SELECT_SPECIALIST:
      return {
        ...state,
        specialists: setSpecialistSelected(state.specialists, action.id),
      };
    case SET_BOOKING_DATE:
      return { ...state, selectedDate: action.date };
    case SET_TIMESLOT_SELECTED:
      return {
        ...state,
        timeSlots: setTimeslotSelected(state.timeSlots, action.id),
      };
    case CLEAR_DATE_SELECTED:
      return {
        ...state,
        selectedDate: new Date(),
        timeSlots: unselectTimeslot(state.timeSlots),
      };
    case SET_USER_INFO_VALUES:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
