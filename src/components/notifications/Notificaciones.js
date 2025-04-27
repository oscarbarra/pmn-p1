import React from 'react';
import './Notificaciones.css';

const Notificaciones = ({ leaderName, leaderEmail, taskName, deadline }) => {
  return (
    <tr className="notification-container">
      <td>
        <div className="user-info">
          <img src="/team-7.jpeg" alt="" className="avatar" />
          <div className="user-details">
            <h6 className="user-name">{leaderName}</h6>
            <p className="user-email">{leaderEmail}</p>
          </div>
        </div>
      </td>

      <td className="other-info">{taskName}</td>
      <td className="other-info">{deadline}</td>
    </tr>
  );
};

export default Notificaciones;