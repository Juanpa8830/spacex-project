import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMision, LeaveMision } from '../../redux/missions/Mission';

const MissionItem = (props) => {
  const {
    id, name, description, joined,
  } = props;

  const dispatch = useDispatch();

  const onClickJoin = () => {
    dispatch(JoinMision(id));
  };

  const onClickLeave = () => {
    dispatch(LeaveMision(id));
  };

  return (
    <tbody>
      <tr>
        <td className="tablename">{name}</td>
        <td className="tabledescription">{description}</td>
        <td className="tablespan">
          {joined
            ? <span className="Activemember">Active Member</span>
            : <span className="notamember">NOT A MEMBER</span>}
        </td>
        <td className="tablebutton">
          {joined
            ? (
              <button
                type="button"
                id={id}
                onClick={onClickLeave}
                className="Leavemission"
              >
                Leave Mission
              </button>
            )
            : <button type="button" id={id} onClick={onClickJoin} className="Joinmission">Join Mission</button> }
        </td>

      </tr>
    </tbody>
  );
};

export default MissionItem;

MissionItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  joined: PropTypes.bool,
};

MissionItem.defaultProps = {
  id: '',
  name: '',
  description: '',
  joined: false,
};
