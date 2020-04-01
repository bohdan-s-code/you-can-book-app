import { AppState } from './reducers';
import { ServiceItem } from './core/types';

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
