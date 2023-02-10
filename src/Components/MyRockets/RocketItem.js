import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket, CancelReservedRocket } from '../../redux/rockets/Rocket';

const RocketItem = (props) => {
  const {
    id, name, description, flickrImage, reserved,
  } = props;

  const dispatch = useDispatch();

  const onClickReserve = () => {
    dispatch(ReserveRocket(id));
  };

  const onClickCancel = () => {
    dispatch(CancelReservedRocket(id));
  };

  return (

    <li className="rocketitem" id="flex">
      <img src={flickrImage} alt="Girl in a jacket" width="250" height="250" />
      <div className="rocketright" id="flex">
        <h2>{name}</h2>
        <div className="spantext" id="flex">
          {reserved && <span className="active">reserved</span>}
          <p>{description}</p>
        </div>
        {reserved
          ? <button type="button" id={id} onClick={onClickCancel} className="reserve">Cancel Reserve</button>
          : <button type="button" id={id} onClick={onClickReserve} className="cancel">Reserve Rocket</button>}
      </div>
    </li>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
  flickrImage: PropTypes.string,
};

RocketItem.defaultProps = {
  id: '',
  name: '',
  description: '',
  reserved: false,
  flickrImage: '',
};
