import React, { useState } from 'react';
import styles from './ModalGrupo.module.css';

const ModalGrupo = ({ grupo, onClose, tareasCreadas }) => {
  const [mostrarIntegrantes, setMostrarIntegrantes] = useState(false);

  if (!grupo) return null;

  const lider = grupo.obtenerLider();
  const tareasDelGrupo = tareasCreadas.filter(
    (t) => t.nombreGrupo === grupo.nombreGrupo
  );

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={styles.cerrar} onClick={onClose}>✕</button>
        <h2 className={styles.titulo}>Detalles del Grupo</h2>

        <div className={styles.detalles}>
          <p><strong>ID:</strong> {grupo.id}</p>
          <p><strong>Nombre del grupo:</strong> {grupo.nombreGrupo}</p>
          <p><strong>Área de trabajo:</strong> {grupo.areaTrabajo}</p>
        </div>

        <div className={styles.integrantes}>
          <h3 className={styles.subtitulo}>Integrantes del Grupo</h3>
          <div onClick={() => setMostrarIntegrantes(!mostrarIntegrantes)} className={styles.lider_clickable}>
            <p><strong>Líder:</strong> {lider.nombre} ({lider.correo})</p>
          </div>

          {mostrarIntegrantes && (
            <div className={styles.listaIntegrantes}>
              {grupo.integrantesGrupo.map((int, index) => (
                <div key={index} className={styles.miembro}>
                  <p><strong>Nombre:</strong> {int.nombre}</p>
                  <p><strong>Correo:</strong> {int.correo}</p>
                  <p className={`${styles.rol} ${int.rol === 'líder' ? styles.lider : ''}`}>{int.rol}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.integrantes}>
          <h3 className={styles.subtitulo}>Tareas del Grupo</h3>
          {tareasDelGrupo.length > 0 ? (
            tareasDelGrupo.map((tarea) => (
              <div key={tarea.id} className={styles.miembro}>
                <p><strong>Título:</strong> {tarea.titulo}</p>
                <p><strong>Estado:</strong> {tarea.estado}</p>
                <p><strong>Prioridad:</strong> {tarea.prioridad}</p>
              </div>
            ))
          ) : (
            <p>No hay tareas registradas para este grupo.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalGrupo;