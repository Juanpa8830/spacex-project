import React from 'react';
import { useSelector } from 'react-redux'; // se usa para acceder al estado en el store
import ProfileRocketItem from './ProfileRocketItem';
import ProfileMissionItem from './ProfileMissionItem';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);
  const joinedMissions = missions.filter((item) => item.joined === true);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  return (
    <div className="container">
      <div className="profilediv" id="flex">
        <div className="joinedmissions">
          <h2>My Missions</h2>
          {joinedMissions.length === 0 ? (
            <h3>No Missions Joined</h3>)
            : (
              <ul className="missionlist" id="flex">
                {joinedMissions.map((mission) => {
                  const {
                    name, id,
                  } = mission;

                  return (
                    <ProfileMissionItem
                      key={id}
                      name={name}
                    />
                  );
                })}
              </ul>
            )}

        </div>
        <div className="resrockets">
          <h2>My rockets</h2>
          {reservedRockets.length === 0 ? (
            <h3>No rockets reserved</h3>)
            : (
              <ul className="rocketlisted" id="flex">
                {reservedRockets.map((rocket) => {
                  const {
                    name, id,
                  } = rocket;

                  return (
                    <ProfileRocketItem
                      key={id}
                      name={name}
                    />
                  );
                })}
              </ul>
            )}

        </div>
      </div>
    </div>

  );
};

export default MyProfile;
