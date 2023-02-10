import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; // se usa para acceder al estado en el store
import MissionItem from './MissionItem';
import { getApiMission } from '../../redux/missions/Mission';
import store from '../../redux/configureStore';

let flag = false;
const MissionList = () => {
  // useEffect, detecta cambios de estado y renderiza. en este caso solo lo hace una vez.
  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiMission());
      flag = true;
    }
  }, []);

  const missions = useSelector((state) => state.Missions);

  return (
    <div className="container">
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">Mission</th>
            <th className="tg-0lax">Description</th>
            <th className="tg-0lax">Status</th>
            <th className="tg-0lax" aria-label="empty" />
          </tr>
        </thead>
        {missions.map((mission) => {
          const {
            id, name, description, joined,
          } = mission;

          return (

            <MissionItem
              key={id}
              id={id}
              name={name}
              description={description}
              joined={joined}
            />
          );
        })}
      </table>
    </div>
  );
};

export default MissionList;
