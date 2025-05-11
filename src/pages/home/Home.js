import home from './Home.module.css';
import Tareas from '../../components/tasks/Tareas';
import ViewGroups from '../../components/viewGroups/ViewGroups';
import TareasAtrasadas from '../../components/graphs/TareasAtrasadas';
import TareasPorMesGraph from '../../components/graphs/TareasPorMes';

function Home() {
  return (
    <div className={home.home_container}> 
      <div className={home.card}>
        <section className={home.margin_bottom}>
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Tareas Prioritarias</h6>
            </div>
          </div>

          <div className={home.card_body}>
            <div className={home.table_responsive}>
              <table className={home.task_table}>
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
        </section>

        <section className={home.margin_bottom}>
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Grupos Recientes</h6>
            </div>
          </div>

          <div className={home.groups_section}>
            <ViewGroups nombre={"Grupo 1"} area={"administración"} />
            <ViewGroups nombre={"Grupo 2"} area={"administración"} />
            <ViewGroups nombre={"Grupo 3"} area={"administración"} />
          </div>
        </section>

        <section className={home.margin_bottom}>
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Graficos de Desempeño</h6>
            </div>
          </div>

          <div className={home.dashboard_container}>
            <div className={home.grafico_row}>
              <TareasAtrasadas tareasFinalizadas={25} tareasAtrasadas={8} />
            </div>
            <div className={home.grafico_row}>
              <TareasPorMesGraph tareasPorMes={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
}

export default Home;