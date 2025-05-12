import React from 'react';
import styles from './ModalTarea.module.css';

const ModalTarea = ({ tarea, onClose }) => {
  if (!tarea) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>

        <h2 className={styles.title}>Detalles de la Tarea</h2>

        <div className={styles.section}>
          <h3>Información General</h3>
          <div className={styles.grid}>
            <div><strong>ID:</strong> {tarea.id}</div>
            <div><strong>Título:</strong> {tarea.titulo}</div>
            <div className={styles.full}><strong>Descripción:</strong> {tarea.descripcion}</div>
            <div><strong>Prioridad:</strong> {tarea.prioridad}</div>
            <div><strong>Estado:</strong> {tarea.estado}</div>
            <div><strong>Fecha creación:</strong> {tarea.fechaCreacion}</div>
            <div><strong>Fecha límite:</strong> {tarea.fechaLimite}</div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Asignación</h3>
          <div className={styles.grid}>
            <div><strong>Usuario:</strong> {tarea.correoUsuario}</div>
            <div><strong>Rol en grupo:</strong> {tarea.rolEnGrupo}</div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Líder y Grupo</h3>
          <div className={styles.grid}>
            <div><strong>Nombre del líder:</strong> {tarea.nombreLider}</div>
            <div><strong>Correo del líder:</strong> {tarea.correoLider}</div>
            <div className={styles.full}><strong>Grupo:</strong> {tarea.nombreGrupo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTarea;