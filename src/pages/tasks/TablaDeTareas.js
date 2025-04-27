import React from 'react';
import './TablaDeTareas.css';
import Tareas from '../../components/tasks/Tareas';

const TablaDeTareas = () => {
  return (
    <div className="container-task">
      <div className="col-12">
        <div className="card">
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Tareas Asignadas</h6>
            </div>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="task-table">
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
                  <Tareas 
                    leaderName="Oscar Barra"
                    leaderEmail="obarra@micorreo.cl"
                    groupName="Grupo 2"
                    groupRole="miembro"
                    taskName="Generar formulario de inicio de sesión"
                    status="En Proceso"
                    deadline="5/05/2025"
                  />
                  <Tareas 
                    leaderName="Oscar Barra"
                    leaderEmail="obarra@micorreo.cl"
                    groupName="Grupo 2"
                    groupRole="miembro"
                    taskName="Generar formulario de inicio de sesión"
                    status="En Proceso"
                    deadline="5/05/2025"
                  />
                  <Tareas 
                    leaderName="Oscar Barra"
                    leaderEmail="obarra@micorreo.cl"
                    groupName="Grupo 2"
                    groupRole="miembro"
                    taskName="Generar formulario de inicio de sesión"
                    status="En Proceso"
                    deadline="5/05/2025"
                  />
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