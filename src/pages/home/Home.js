import home from './Home.module.css';
import Tareas from '../../components/tasks/Tareas';
import ViewGroups from '../../components/viewGroups/ViewGroups';
import TareasAtrasadas from '../../components/graphs/TareasAtrasadas';
import TareasPorMesGraph from '../../components/graphs/TareasPorMes';
import { useEffect, useState } from 'react';

function Home( {user, tareasCreadas } ) {
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  useEffect(() => {
    // Filtrar tareas por el correo del usuario
    const tareasDelUsuario = tareasCreadas.filter(tarea => tarea.correoUsuario === user.useremail);

    // Asignar un valor numérico a la prioridad (0 = Alta, 1 = Media, 2 = Baja)
    const prioridadMap = {
      "Alta": 0,
      "Media": 1,
      "Baja": 2
    };

    // Ordenar las tareas por prioridad
    const tareasOrdenadas = tareasDelUsuario.sort((a, b) => {
      return prioridadMap[a.prioridad] - prioridadMap[b.prioridad];
    });

    setTareasFiltradas(tareasOrdenadas);
  }, [user, tareasCreadas]);
  
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
                {tareasFiltradas.length > 0 ? (
                    tareasFiltradas.map((tarea) => (
                      <Tareas
                        key={tarea.id}
                        leaderName={tarea.nombreLider}
                        leaderEmail={tarea.correoLider}
                        groupName={tarea.nombreGrupo}
                        groupRole={tarea.rolEnGrupo}
                        taskName={tarea.titulo}
                        status={tarea.estado}
                        deadline={tarea.fechaLimite}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className={home.sin_tareas_asignadas}>
                        <p>No se encontrarón tareas</p>
                      </td>
                    </tr>
                  )}
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