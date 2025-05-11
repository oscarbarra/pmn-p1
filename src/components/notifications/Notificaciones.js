import React from 'react';
import notificaciones from './Notificaciones.module.css';

const Notificaciones = ({ leaderName, leaderEmail, taskName, deadline }) => {
  return (
    <tr className={notificaciones.notification_container}>
      <td>
        <div className={notificaciones.user_info}>
          <img src="/team-7.jpeg" alt="" className={notificaciones.avatar} />
          <div className={notificaciones.user_details}>
            <h6 className={notificaciones.user_name}>{leaderName}</h6>
            <p className={notificaciones.user_email}>{leaderEmail}</p>
          </div>
        </div>
      </td>

      <td className={notificaciones.other_info}>{taskName}</td>
      <td className={notificaciones.other_info}></td>
    </tr>
  );
};

export default Notificaciones;