import { combineReducers } from 'redux';
import { servicesReducer } from './services';

export const rootReducer = combineReducers({
  form: servicesReducer,
});

export type AppState = ReturnType<typeof rootReducer>
