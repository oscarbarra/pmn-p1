import React from 'react';
import styles from './ModalTarea.module.css';

const ModalTarea = ({ tarea, onClose }) => {
  if (!tarea) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.contenido} onClick={(e) => e.stopPropagation()}>
        <button className={styles.cerrar} onClick={onClose}>✕</button>
        <h2>Detalles de la tarea</h2>
        <ul>
          <li><strong>ID:</strong> {tarea.id}</li>
          <li><strong>Título:</strong> {tarea.titulo}</li>
          <li><strong>Descripción:</strong> {tarea.descripcion}</li>
          <li><strong>Prioridad:</strong> {tarea.prioridad}</li>
          <li><strong>Estado:</strong> {tarea.estado}</li>
          <li><strong>Fecha de creación:</strong> {tarea.fechaCreacion}</li>
          <li><strong>Fecha límite:</strong> {tarea.fechaLimite}</li>
          <li><strong>Correo usuario:</strong> {tarea.correoUsuario}</li>
          <li><strong>Nombre líder:</strong> {tarea.nombreLider}</li>
          <li><strong>Correo líder:</strong> {tarea.correoLider}</li>
          <li><strong>Grupo:</strong> {tarea.nombreGrupo}</li>
          <li><strong>Rol en grupo:</strong> {tarea.rolEnGrupo}</li>
        </ul>
      </div>
    </div>
  );
};

export default ModalTarea;