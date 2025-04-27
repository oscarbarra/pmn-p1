import './Grupos.css';
import ViewGroups from '../../components/viewGroups/ViewGroups';

function Grupos() {
  return (
    <div className="grupos-container">
      <div className="card">
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Grupos a los que perteneces</h6>
            </div>
          </div>

          <div className="groups-section">
          <ViewGroups nombre={"Grupo 1"} area={"administración"} />
          <ViewGroups nombre={"Grupo 2"} area={"administración"} />
          <ViewGroups nombre={"Grupo 3"} area={"administración"} />
          <ViewGroups nombre={"Grupo 4"} area={"administración"} />
          <ViewGroups nombre={"Grupo 5"} area={"administración"} />
          <ViewGroups nombre={"Grupo 6"} area={"administración"} />
          <ViewGroups nombre={"Grupo 7"} area={"administración"} />
          <ViewGroups nombre={"Grupo 8"} area={"administración"} />
        </div>
      </div>
    </div>
  );
}

export default Grupos;