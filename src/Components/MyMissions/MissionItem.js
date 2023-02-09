import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMision } from '../../redux/missions/Mission';

const MissionItem = (props) => {
  const {
    id, name, description, joined,
  } = props;

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(JoinMision(id));
  };

  return (
    <tbody>
      <tr>
        <td className="tablename">{name}</td>
        <td className="tabledescription">{description}</td>
        <td className="tablespan">
          <span className={joined ? 'Activemember' : 'notamember'}>
            {joined ? 'Active Member' : 'NOT A MEMBER'}
          </span>
        </td>
        <td className="tablebutton">
          <button type="button" id={id} onClick={onClick} className={joined ? 'Leavemission' : 'Joinmission'}>
            {joined ? 'Leave Mission' : 'Join Mission'}
          </button>
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
