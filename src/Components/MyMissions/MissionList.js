import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApiMission } from '../../redux/missions/Mission';
import MissionItem from './MissionItem';

const MissionList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getApiMission()).then(() => setLoading(false));
  }, [dispatch]);

  const missions = useSelector((state) => state.Missions);

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="rocketlist" id="flex">
          {missions.map((mission) => {
            const {
              id, name, description, joined,
            } = mission;
            const uniqueId = `${Date.now()}-${Math.random()}`;

            return (
              <MissionItem
                key={uniqueId}
                id={id}
                name={name}
                description={description}
                joined={joined}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MissionList;
