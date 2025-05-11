import React, { useState } from 'react';
import tareas from './TablaDeTareas.module.css';
import Tareas from '../../components/tasks/Tareas';
import ModalTarea from '../../components/tasks/ModalTarea';

const TablaDeTareas = ({ user }) => {
  const [orden, setOrden] = useState('fecha-desc');
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const handleAbrirModal = (tarea) => setTareaSeleccionada(tarea);
  const handleCerrarModal = () => setTareaSeleccionada(null);

  class PrototipoTareas {
    constructor(
      id,
      titulo,
      descripcion,
      prioridad,
      estado,
      fechaCreacion,
      fechaLimite,
      correoUsuario,
      nombreLider,
      correoLider,
      nombreGrupo,
      rolEnGrupo
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.prioridad = prioridad;
      this.estado = estado;
      this.fechaCreacion = fechaCreacion;
      this.fechaLimite = fechaLimite;
      this.correoUsuario = correoUsuario;
      this.nombreLider = nombreLider;
      this.correoLider = correoLider;
      this.nombreGrupo = nombreGrupo;
      this.rolEnGrupo = rolEnGrupo;
    }
  
    marcarComoCompletada() {
      this.estado = "Completada";
    }
  
    estaVencida() {
      const hoy = new Date();
      const limite = new Date(this.fechaLimite);
      return hoy > limite;
    }
  }

  const tareasData = [
    new PrototipoTareas(
      1,
      "Generar formulario de inicio de sesión",
      "Crear un formulario funcional con validación",
      "Alta",
      "Finalizada",
      "2024-12-01",
      "2024-12-30",
      "obarra@gmail.com",
      "Cristhofer Jara",
      "crithofer@gmail.com",
      "Grupo 1",
      "miembro"
    ),
    new PrototipoTareas(
      2,
      "Diseñar dashboard",
      "Diseño UI/UX del panel principal",
      "Media",
      "En Proceso",
      "2025-05-01",
      "2025-05-19",
      "obarra@gmail.com",
      "Cristhofer Jara",
      "crithofer@gmail.com",
      "Grupo 2",
      "miembro"
    ),
    new PrototipoTareas(
      3,
      "Generar formulario de inicio de sesión",
      "Crear un formulario funcional con validación",
      "Alta",
      "En Proceso",
      "2025-05-01",
      "2025-05-30",
      "obarra@gmail.com",
      "Felipe Ocampos",
      "felipe@gmail.com",
      "Grupo 3",
      "miembro"
    ),
    new PrototipoTareas(
      4,
      "Diseñar dashboard",
      "Diseño UI/UX del panel principal",
      "Media",
      "Finalizada",
      "2023-01-15",
      "2023-02-19",
      "admin@gmail.com",
      "Cristhofer Jara",
      "crithofer@gmail.com",
      "Grupo 4",
      "miembro"
    ),
    new PrototipoTareas(
      5,
      "Diseñar dashboard",
      "Diseño UI/UX del panel principal",
      "Media",
      "En Proceso",
      "2025-05-05",
      "2025-05-29",
      "admin@gmail.com",
      "Snaw Flake",
      "snawflk@gmail.com",
      "Grupo 6",
      "miembro"
    )
  ];

  const userEmailLogeado = user.useremail;

  const tareasFiltradas = tareasData.filter(
    (t) => t.correoUsuario === userEmailLogeado
  );

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
                        <p>No tienes tareas asignadas actualmente.</p>
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