import React from 'react';
import './TablaDeTareas.css';
import Tareas from '../../components/tasks/Tareas';

const TablaDeTareas = () => {
  return (
    <div className="row">
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
                    leaderName="John Michael"
                    leaderEmail="john@creative-tim.com"
                    groupName="Nombre Grupo"
                    groupRole="Rol en el Grupo"
                    taskName="Nombre de la tarea"
                    status="En Proceso"
                    deadline="23/04/18"
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