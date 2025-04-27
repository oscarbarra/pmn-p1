import './Home.css';
import ViewGroups from '../../components/viewGroups/ViewGroups';

function Home() {
  return (
    <div className="home-container">
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
      </div>
    </div>
  );
}

export default Home;