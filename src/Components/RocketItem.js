import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket } from '../redux/rockets/Rocket';

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
      <li>
        <li>{id}</li>
        <li>{name}</li>
        <p>
          <span className={reserved ? 'active' : 'inactive'}>
            reserved
          </span>
          {' '}
          {description}
        </p>
        <img src={flickrImage} alt="Girl in a jacket" width="250" height="250" />
        <button type="button" onClick={onClick} className={reserved ? 'reserve' : 'cancel'}>{reserved ? 'Cancel reserve' : 'Reserve'}</button>
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
