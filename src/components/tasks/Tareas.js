import React from 'react';
import tareas from './Tareas.module.css';

const Tareas = ({ leaderName, leaderEmail, groupName, groupRole, taskName, status, deadline, onClick}) => {
  return (
    <tr className={tareas.task_container} onClick={onClick}>
      <td>
        <div className={tareas.user_info}>
          <img src="/team-7.jpeg" alt="" className={tareas.avatar} />
          <div className={tareas.user_details}>
            <h6 className={tareas.user_name}>{leaderName}</h6>
            <p className={tareas.user_email}>{leaderEmail}</p>
          </div>
        </div>
      </td>

      <td>
        <p className={tareas.group_name}>{groupName}</p>
        <p className={tareas.group_role}>{groupRole}</p>
      </td>
      <td className={tareas.other_info}>{taskName}</td>
      <td className={tareas.other_info}>{status}</td>
      <td className={tareas.other_info}>{deadline}</td>
    </tr>
  );
};

export default Tareas;