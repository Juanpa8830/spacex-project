import { configureStore } from '@reduxjs/toolkit'; // ya trae la config del combine reducer y del createStore

import rocketsReducer from './rockets/Rocket';

const rootReducer = {
  Rockets: rocketsReducer,
  // Missions: missionsReducer,
  // MyProfile: myProfileReducer
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
