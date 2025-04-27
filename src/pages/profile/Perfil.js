import './Perfil.css';

function Perfil() {
  return (
    <div className="profile-container">
      <div className="card">
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Perfil de Usuario</h6>
            </div>
          </div>

          <div className="user-info-profile">
            <img src="/team-7.jpeg" alt="user-photo" className="avatar-profile"/>
            <div className="user-details">
              <p className="user-name-profile">User name</p>
              <p className="user-email-profile">User email</p>
            </div>
          </div>

          <div>
            <form>
              <ul className="form-list">
                <li>
                  <label htmlFor="email">Cambiar correo</label>
                  <input id="email" placeholder="nuevo correo" type="email" />
                </li>
                <li>
                  <label htmlFor="password">Cambiar contraseña</label>
                  <input id="password" placeholder="nueva contraseña" type="password" />
                </li>
                <li>
                  <label htmlFor="repeat-password">Repetir contraseña</label>
                  <input id="repeat-password" placeholder="repetir contraseña" type="password" />
                </li>
                <li className="button-group">
                  <button type="submit" className="btn-accept">Aceptar</button>
                  <button type="button" className="btn-cancel">Cancelar</button>
                </li>
              </ul>
            </form>
          </div>

          <div className="delete-account-section">
            <p className="delete-warning">¡Advertencia! Eliminar tu cuenta es irreversible.</p>
            <p className="delete-info">Al eliminar tu cuenta, perderás todos tus datos y no podrás recuperarlos.</p>
            <button className="btn-delete">Eliminar cuenta</button>
          </div>
      </div>
    </div>
  );
}

export default Perfil;