import { findIndex } from 'lodash';
import { ServicesFormData } from '../core/types';

export const setServiceItemChecked = (
  services: ServicesFormData[],
  parentId: string,
  serviceItemId: string
): ServicesFormData[] => {
  return services.map(service => {
    if (service.id === parentId) {
      const serviceItemIndex = findIndex(service.items, { id: serviceItemId });
      return {
        ...service,
        items: [
          ...service.items.slice(0, serviceItemIndex),
          {
            ...service.items[serviceItemIndex],
            checked: !service.items[serviceItemIndex].checked,
          },
          ...service.items.slice(serviceItemIndex + 1),
        ],
      };
    }
    return service;
  });
};
