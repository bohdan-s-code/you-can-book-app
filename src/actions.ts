import { FormActionTypes, SET_SERVICE_CHECKED } from './core/action-types';

export const updateServices = (
  parentId: string,
  serviceId: string
): FormActionTypes => ({
  type: SET_SERVICE_CHECKED,
  parentId,
  serviceId,
});
