import React from 'react';
import './Tareas.css';

const Tareas = ({ leaderName, leaderEmail, groupName, groupRole, taskName, status, deadline }) => {
  return (
    <tr>
      <td>
        <div className="user-info">
          <img src="../../images/team-7.jpeg" alt={leaderName} className="avatar" />
          <div className="user-details">
            <h6 className="user-name">{leaderName}</h6>
            <p className="user-email">{leaderEmail}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="group-name">{groupName}</p>
        <p className="group-role">{groupRole}</p>
      </td>
      <td className="other-info">{taskName}</td>
      <td className="other-info">{status}</td>
      <td className="other-info">{deadline}</td>
    </tr>
  );
};

export default Tareas;