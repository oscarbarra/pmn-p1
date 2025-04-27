import './Grupos.css';
import ViewGroups from '../../components/viewGroups/ViewGroups';

function Grupos() {
  return (
    <div className="grupos-container">
      <div className="header-row">
        <div className="header-content">
          <h3 className="header-title">Inicio</h3>
          <p className="header-description">
            Revisa los grupos a los que perteneces
          </p>
        </div>
      </div>

      <div className="groups-row">
        {/* Grupo 1 */}
        <ViewGroups nombre={"Grupo 1"} area={"administración"} />

        {/* Grupo 2 */}
        <ViewGroups nombre={"Grupo 2"} area={"administración"} />

        {/* Grupo 3 */}
        <ViewGroups nombre={"Grupo 3"} area={"administración"} />

        {/* Grupo 4 */}
        <ViewGroups nombre={"Grupo 4"} area={"administración"} />

        {/* Grupo 5 */}
        <ViewGroups nombre={"Grupo 5"} area={"administración"} />

        {/* Grupos 6 */}
        <ViewGroups nombre={"Grupo 6"} area={"administración"} />

        {/* Grupo 7 */}
        <ViewGroups nombre={"Grupo 7"} area={"administración"} />

        {/* Grupo 8 */}
        <ViewGroups nombre={"Grupo 8"} area={"administración"} />

        {/* Grupo 9 */}
        <ViewGroups nombre={"Grupo 9"} area={"administración"} />
      </div>
    </div>
  );
}

export default Grupos;