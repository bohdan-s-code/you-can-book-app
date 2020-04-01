export const SET_SERVICE_CHECKED = 'SET_SERVICE_CHECKED';

export interface UpdateService {
  type: typeof SET_SERVICE_CHECKED;
  parentId: string;
  serviceId: string;
}

export type FormActionTypes = UpdateService;
