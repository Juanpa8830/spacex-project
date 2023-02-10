import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_MISSION_DATA = 'GET_MISSION_DATA';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const missionUrl = 'https://api.spacexdata.com/v3/missions';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_MISSION_DATA}/fulfilled`:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            joined: true,
          };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            joined: false,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export const getApiMission = createAsyncThunk(GET_MISSION_DATA,
  () => axios.get(missionUrl).then((response) => {
    const missionObj = (response.data).map((mission) => (
      {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        joined: false,
      }
    ));

    return missionObj;
  }));

export const JoinMision = (id) => (
  {
    type: JOIN_MISSION,
    payload: id,
  }
);

export const LeaveMision = (id) => (
  {
    type: LEAVE_MISSION,
    payload: id,
  }
);

export default missionsReducer;
