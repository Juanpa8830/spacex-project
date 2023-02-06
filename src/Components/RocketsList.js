import React from 'react';
import { useSelector } from 'react-redux'; // se usa para acceder al estado en el store
import RocketItem from './RocketItem';

const RocketsList = () => {
  // tomo el reducer book del state en el root reducer
  const rockets = useSelector((state) => state.Rockets);

  return (
    <div className="container">
      <ul className="booklist" id="flex">
        {rockets.map((rocket) => {
          const {
            id, name, description, flickrImage, reserved,
          } = rocket;

          return (

            <RocketItem
              key={id}
              id={id}
              name={name}
              description={description}
              flickrImage={flickrImage}
              reserved={reserved}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RocketsList;
