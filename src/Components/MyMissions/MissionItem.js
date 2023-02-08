import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveMission } from '../../redux/missions/Mission';

const MissionItem = (props) => {
  const {
    id, name, description, joined,
  } = props;

  const dispatch = useDispatch();

  const joinedButton = () => {
    dispatch(ReserveMission(id));
  };

  return (

    <li className="rocketitem" id="flex">
      <h2>{name}</h2>
      <p>{description}</p>
      <span className="statusName">{joined ? 'Active Member' : 'Not a Member'}</span>
      <button type="button" onClick={joinedButton} id={id} className={joined ? 'joined' : 'cancel'}>{joined ? 'Cancel Join' : 'Join Mission'}</button>
    </li>

  );
};

export default MissionItem;

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.string.isRequired,
};
