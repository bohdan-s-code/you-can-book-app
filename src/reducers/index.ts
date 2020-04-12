import { combineReducers } from 'redux';
import { servicesReducer } from './services';
import { stepperReducer } from './stepper';

export const rootReducer = combineReducers({
  form: servicesReducer,
  stepper: stepperReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
