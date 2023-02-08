import React from 'react';
import { useSelector } from 'react-redux'; // se usa para acceder al estado en el store
import ProfileRocketItem from './ProfileRocketItem';
import ProfileMissionItem from './ProfileMissionItem';

const MyProfile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);
  return (
    <div className="container">
      <div className="profilediv" id="flex">
        <div className="<joinedmissions">
          <h1>My Missions</h1>

          {missions.filter((item) => item.joined === true).length === 0 ? (
            <h2>No Missions Joined</h2>)
            : (
              <ul className="missionlist" id="flex">
                {missions.filter((item) => item.joined === true).map((mission) => {
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
        <div className="<resrockets">
          <h1>My rockets</h1>

          {rockets.filter((item) => item.reserved === true).length === 0 ? (
            <h2>No rockets reserved</h2>)
            : (
              <ul className="rocketlisted" id="flex">
                {rockets.filter((item) => item.reserved === true).map((rocket) => {
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
