// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import dashboardReducer from './reducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  // add other reducers here if needed
});

export const store = createStore(rootReducer);
