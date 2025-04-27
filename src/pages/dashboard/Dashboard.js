import './Dashboard.css';
import TareasGraph from '../../components/graphs/TareasAtrasadas';
import TareasPorMesGraph from '../../components/graphs/TareasPorMes';
// import ProgresoTareasGraph from '../../components/graphs/ProgresoTareas';

function Dashboard() {
  return (
    <div>
      <div className="custom-card-header">
        <div className="custom-header-content">
          <h6 className="custom-header-title">Tareas Asignadas</h6>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="grafico-row">
          <TareasGraph tareasFinalizadas={25} tareasAtrasadas={8} />
        </div>
        <div className="grafico-row">
          <TareasPorMesGraph tareasPorMes={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;