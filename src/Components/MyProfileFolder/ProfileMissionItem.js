import React from 'react';
import PropTypes from 'prop-types';

const ProfileMissionItem = (props) => {
  const {
    name,
  } = props;

  return (
    <li className="profMissionitem" id="flex">
      <h2>{name}</h2>
    </li>

  );
};

export default ProfileMissionItem;

ProfileMissionItem.propTypes = {
  name: PropTypes.string.isRequired,
};
