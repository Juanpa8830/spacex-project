import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DATA = 'GET_DATA';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVE = 'CANCEL_ROCKET_RESERVE';
const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case CANCEL_ROCKET_RESERVE:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export const getApiRockets = createAsyncThunk(GET_DATA,
  () => axios.get(rocketsUrl).then((response) => {
    const rocketObj = (response.data).map((rocket) => (
      {
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickrImage: rocket.flickr_images[0],
        reserved: false,
      }
    ));

    return rocketObj;
  }));

export const ReserveRocket = (id) => (
  {
    type: RESERVE_ROCKET,
    payload: id,
  }
);

export const CancelReservedRocket = (id) => (
  {
    type: CANCEL_ROCKET_RESERVE,
    payload: id,
  }
);

export default rocketsReducer;
