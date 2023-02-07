import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket } from '../../redux/rockets/Rocket';

const RocketItem = (props) => {
  const {
    id, name, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(ReserveRocket(id));
  };

  return (
    <div>
      <li className="rocketitem" id="flex">
        <img src={flickrImage} alt="Girl in a jacket" width="250" height="250" />
        <div className="rocketright" id="flex">
          <h2>{name}</h2>
          <div className="spantext" id="flex">
            <span className={reserved ? 'active' : 'inactive'}>
              reserved
            </span>
            <p>{description}</p>
          </div>
          <button type="button" id={id} onClick={onClick} className={reserved ? 'reserve' : 'cancel'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </li>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
  flickrImage: PropTypes.string.isRequired,
};
