import './Dashboard.css';
import TareasAtrasadas from '../../components/graphs/TareasAtrasadas';
import TareasPorMesGraph from '../../components/graphs/TareasPorMes';
import ProgresoTareasGraph from '../../components/graphs/ProgresoTareas';

function Dashboard() {
  return (
    <div className="card">
      <div className="custom-card-header">
        <div className="custom-header-content">
          <h6 className="custom-header-title">Tareas Asignadas</h6>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="grafico-row">
          <TareasAtrasadas tareasFinalizadas={25} tareasAtrasadas={8} />
        </div>
        <div className="grafico-row">
          <ProgresoTareasGraph tareasCompletadas={16} tareasTotales={42}/>
        </div>
        <div className="grafico-row span-2">
          <TareasPorMesGraph tareasPorMes={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;