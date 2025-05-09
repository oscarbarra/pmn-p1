
import './ViewGroups.css'

function ViewGroups({ nombre, area }) {
  return (
    <div className="group-card">
        <div>
            <div className="group-content">
                <h6 className="card-title"> {nombre} </h6>
                <p className="card-text"> {area} </p>

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
  );
}

export default ViewGroups;