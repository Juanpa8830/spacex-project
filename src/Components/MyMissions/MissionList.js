import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // se usa para acceder al estado en el store
import MissionItem from './MissionItem';
import { getApiMission } from '../../redux/missions/Mission';

let flag = false;
const MissionList = () => {
  const dispatch = useDispatch();

  // useEffect, detecta cambios de estado y renderiza. en este caso solo lo hace una vez.
  useEffect(() => {
    if (flag === false) {
      dispatch(getApiMission());
      flag = true;
    }
  }, []);

  const missions = useSelector((state) => state.Missions);

  return (
    <div className="container">
      <table className="tg">
        <tr>
          <th className="tg-0lax">Mission</th>
          <th className="tg-0lax">Description</th>
          <th className="tg-0lax">Status</th>
          <th className="tg-0lax" aria-label="empty" />
        </tr>

        {missions.map((mission) => {
          const {
            id, name, description, joined,
          } = mission;

          return (

            <MissionItem
              key="mission"
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
