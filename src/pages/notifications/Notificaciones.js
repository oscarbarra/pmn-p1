import notificaciones from './Notificaciones.module.css';
import Notificaciones from '../../components/notifications/Notificaciones.js';

function TablaDeNotificaciones() {
  return (
    <div className={notificaciones.container_task}>
      <div className={notificaciones.col_12}>
        <div className={notificaciones.card}>
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Notificaciones</h6>
            </div>
          </div>

          <div className={notificaciones.card_body}>
            <div className={notificaciones.table_responsive}>
              <table className={notificaciones.task_table}>
                <thead>
                  <tr>
                    <th>Emisor</th>
                    <th>Asunto</th>
                    <th>Fecha de recepción</th>
                  </tr>
                </thead>
                <tbody>
                  <Notificaciones 
                    leaderName="Oscar Barra"
                    leaderEmail="obarra@micorreo.cl"
                    taskName="Te a invitado a un nuevo grupo de trabajo"
                    deadline="5/05/2025"
                  />
                  <Notificaciones 
                    leaderName="bot de notificaciones"
                    leaderEmail="bot11728@mibotdenotificaciones.bot"
                    taskName="Tienes tareas proximas a vencer en el grupo 2"
                    deadline="5/05/2025"
                  />
                  <Notificaciones 
                    leaderName="bot de notificaciones"
                    leaderEmail="bot11728@mibotdenotificaciones.bot"
                    taskName="Tienes tareas proximas a vencer en el grupo 7"
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
}

export default TablaDeNotificaciones;