import './styles/Home.css';

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
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 1</h6>
              <p className="card-text">administración</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo 2 */}
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 2</h6>
              <p className="card-text">producción</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo 3 */}
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 3</h6>
              <p className="card-text">desarrollo</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo 4 */}
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 4</h6>
              <p className="card-text">administración</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo 5 */}
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 5</h6>
              <p className="card-text">administración</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grupos 6 */}
        <div className="group-card">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Grupo 6</h6>
              <p className="card-text">administración</p>
              <div className="chart-wrapper">
                
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <i className="material-symbols-rounded icon">groups</i>
                <p className="footer-text">Miembros del grupo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;