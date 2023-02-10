import { configureStore } from '@reduxjs/toolkit'; // ya trae la config del combine reducer y del createStore

import rocketsReducer from './rockets/Rocket';
import missionsReducer from './missions/Mission';

export const rootReducer = {
  Rockets: rocketsReducer,
  Missions: missionsReducer,
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
