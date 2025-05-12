import React, { useState } from 'react';
import tareas from './TablaDeTareas.module.css';
import Tareas from '../../components/tasks/Tareas';
import ModalTarea from '../../components/tasks/ModalTarea';

const TablaDeTareas = ({ user, tareasCreadas}) => {
  const orden = 'fecha-desc';
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroPrioridad, setFiltroPrioridad] = useState("todas");
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const handleAbrirModal = (tarea) => setTareaSeleccionada(tarea);
  const handleCerrarModal = () => setTareaSeleccionada(null);

  const userEmailLogeado = user.useremail;

  const tareasFiltradas = tareasCreadas.filter((t) => {
    const coincideUsuario = t.correoUsuario === userEmailLogeado;
  
    const coincideBusqueda =
      t.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.nombreGrupo.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.nombreLider.toLowerCase().includes(busqueda.toLowerCase());
  
    const coincideEstado =
      filtroEstado === "todos" || t.estado === filtroEstado;
  
    const coincidePrioridad =
      filtroPrioridad === "todas" || t.prioridad === filtroPrioridad;
  
    return coincideUsuario && coincideBusqueda && coincideEstado && coincidePrioridad;
  });

  const tareasOrdenadas = [...tareasFiltradas].sort((a, b) => {
    switch (orden) {
      case 'fecha-asc':
        return new Date(a.fechaLimite) - new Date(b.fechaLimite);
      case 'fecha-desc':
        return new Date(b.fechaLimite) - new Date(a.fechaLimite);
      case 'grupo-asc':
        return a.nombreGrupo.localeCompare(b.nombreGrupo);
      case 'grupo-desc':
        return b.nombreGrupo.localeCompare(a.nombreGrupo);
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

          <div className={tareas.filtros}>
            <input
              type="text"
              placeholder="Buscar por título, grupo o líder..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className={tareas.input_busqueda}
            />

            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
              className={tareas.custom_select_filtro}
            >
              <option value="todos">Todos los estados</option>
              <option value="En Proceso">En Proceso</option>
              <option value="Finalizada">Finalizada</option>
              <option value="Pendiente">Pendiente</option>
            </select>

            <select
              value={filtroPrioridad}
              onChange={(e) => setFiltroPrioridad(e.target.value)}
              className={tareas.custom_select_filtro}
            >
              <option value="todas">Todas las prioridades</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
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
                        leaderName={tarea.nombreLider}
                        leaderEmail={tarea.correoLider}
                        groupName={tarea.nombreGrupo}
                        groupRole={tarea.rolEnGrupo}
                        taskName={tarea.titulo}
                        status={tarea.estado}
                        deadline={tarea.fechaLimite}
                        onClick={() => handleAbrirModal(tarea)}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className={tareas.sin_tareas_asignadas}>
                        <p>No se encontrarón tareas</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {tareaSeleccionada && (
                <ModalTarea tarea={tareaSeleccionada} onClose={handleCerrarModal} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TablaDeTareas;