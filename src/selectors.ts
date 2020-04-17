import { AppState } from './reducers';
import { ServiceItem, Specialists, Timeslot } from './core/types';

export const getServicesCheckedItems = (state: AppState): ServiceItem[] => {
  const checkedServices: ServiceItem[] = [];
  state.form.services.forEach(service => {
    service.items.forEach(item => {
      if (item.checked) {
        checkedServices.push(item);
      }
    });
  });
  return checkedServices;
};

export const getSelectedTimeslots = (state: AppState): Timeslot[] => {
  return state.form.timeSlots.filter(timeslot => timeslot.selected);
};

export const getSelectedSpecialist = (state: AppState): Specialists[] => {
  return state.form.specialists.filter(specialist => specialist.selected);
};
