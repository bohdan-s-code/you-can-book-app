import { FormState } from '../core/types';
import { FormActionTypes, SET_SERVICE_CHECKED } from '../core/action-types';
import { servicesFormData } from '../core/mock-data';
import { setServiceItemChecked } from '../utils/set-service-item-checked';

const initialState: FormState = {
  services: servicesFormData,
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
    default:
      return state;
  }
};
