import { findIndex } from 'lodash';
import { ServicesFormData, Specialists, Timeslot } from '../core/types';

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

export const setSpecialistSelected = (
  specialists: Specialists[],
  id: string
): Specialists[] => {
  return specialists.map(specialist =>
    specialist.id === id
      ? { ...specialist, selected: true }
      : { ...specialist, selected: false }
  );
};

export const setTimeslotSelected = (
  timeSlots: Timeslot[],
  id: string
): Timeslot[] => {
  return timeSlots.map(timeSlot =>
    timeSlot.id === id
      ? { ...timeSlot, selected: true }
      : { ...timeSlot, selected: false }
  );
};

export const unselectTimeslot = (timeSlots: Timeslot[]): Timeslot[] => {
  return timeSlots.map(timeslot =>
    timeslot.selected ? { ...timeslot, selected: false } : timeslot
  );
};

export const servicesSearch = (
  services: ServicesFormData[],
  searchCriteria: string
): ServicesFormData[] => {
  return services.map(service => ({
    ...service,
    items: service.items.filter(
      item =>
        item.label
          .toLocaleLowerCase()
          .indexOf(searchCriteria.toLocaleLowerCase()) !== -1
    ),
  }));
};
