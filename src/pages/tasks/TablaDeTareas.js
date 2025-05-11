import React, { useState } from 'react';
import tareas from './TablaDeTareas.module.css';
import Tareas from '../../components/tasks/Tareas';

const TablaDeTareas = ({ user }) => {
  const [orden, setOrden] = useState('fecha-desc');

  const tareasData = [
    {
      id: 1,
      userEmail: 'obarra@gmail.com',
      leaderName: 'Cristhofer Jara',
      leaderEmail: 'crithofer@gmail.com',
      groupName: 'Grupo 1',
      groupRole: 'miembro',
      taskName: 'Generar formulario de inicio de sesión',
      status: 'Finalizada',
      deadline: '2024-12-30',
    },
    {
      id: 2,
      userEmail: 'obarra@gmail.com',
      leaderName: 'Cristhofer Jara',
      leaderEmail: 'crithofer@gmail.com',
      groupName: 'Grupo 2',
      groupRole: 'miembro',
      taskName: 'Diseñar dashboard',
      status: 'En Proceso',
      deadline: '2025-05-19',
    },
    {
      id: 3,
      userEmail: 'obarra@gmail.com',
      leaderName: 'Felipe Ocampos',
      leaderEmail: 'felipe@gmail.com',
      groupName: 'Grupo 3',
      groupRole: 'miembro',
      taskName: 'Generar formulario de inicio de sesión',
      status: 'En Proceso',
      deadline: '2025-05-30',
    },
    {
      id: 4,
      userEmail: 'admin@gmail.com',
      leaderName: 'Cristhofer Jara',
      leaderEmail: 'crithofer@gmail.com',
      groupName: 'Grupo 4',
      groupRole: 'miembro',
      taskName: 'Diseñar dashboard',
      status: 'Finalizado',
      deadline: '2023-02-19',
    },
    {
      id: 5,
      userEmail: 'admin@gmail.com',
      leaderName: 'Snaw Flake',
      leaderEmail: 'snawflk@gmail.com',
      groupName: 'Grupo 6',
      groupRole: 'miembro',
      taskName: 'Diseñar dashboard',
      status: 'En Proceso',
      deadline: '2025-05-29',
    },
  ];

  const userEmailLogeado = user.useremail;

  const tareasFiltradas = tareasData.filter(
    (t) => t.userEmail === userEmailLogeado
  );

  const tareasOrdenadas = [...tareasFiltradas].sort((a, b) => {
    switch (orden) {
      case 'fecha-asc':
        return new Date(a.deadline) - new Date(b.deadline);
      case 'fecha-desc':
        return new Date(b.deadline) - new Date(a.deadline);
      case 'grupo-asc':
        return a.groupName.localeCompare(b.groupName);
      case 'grupo-desc':
        return b.groupName.localeCompare(a.groupName);
      default:
        return 0;
    }
  });

  return (
    <div className={tareas.container_task}>
      <div className={tareas.col_12}>
        <div className={tareas.card}>
          <div className="custom-card-header">
            <div className="custom-header-content"> 
              <h6 className="custom-header-title">Tareas Asignadas</h6>
            </div>          
          </div>

          <div>
            <select
              className={tareas.custom_select_filtro}
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="fecha-desc">Fecha Límite ↓</option>
              <option value="fecha-asc">Fecha Límite ↑</option>
              <option value="grupo-asc">Grupo A-Z</option>
              <option value="grupo-desc">Grupo Z-A</option>
            </select>
          </div>

          <div className={tareas.card_body}>
            <div className={tareas.table_responsive}>
              <table className={tareas.task_table}>
                <thead>
                  <tr>
                    <th>Administrador de grupo</th>
                    <th>Grupo</th>
                    <th>Tarea</th>
                    <th>Estado</th>
                    <th>Fecha Límite</th>
                  </tr>
                </thead>
                <tbody>
                  {tareasOrdenadas.length > 0 ? (
                    tareasOrdenadas.map((tarea) => (
                      <Tareas
                        key={tarea.id}
                        leaderName={tarea.leaderName}
                        leaderEmail={tarea.leaderEmail}
                        groupName={tarea.groupName}
                        groupRole={tarea.groupRole}
                        taskName={tarea.taskName}
                        status={tarea.status}
                        deadline={tarea.deadline}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className={tareas.sin_tareas_asignadas}>
                        <p>No tienes tareas asignadas actualmente.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TablaDeTareas;