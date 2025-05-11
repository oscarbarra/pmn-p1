import perfil from './Perfil.module.css';
import { useState } from 'react';

function Perfil({ user, onUpdateUser }) {
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [userpasswordrepetir, setUserPasswordRepetir] = useState('')

  const handleUpdate = (e) => {
    e.preventDefault();
    if (userpassword === userpasswordrepetir) {
      const updatedUser = { ...user, useremail, userpassword };
      onUpdateUser(updatedUser);
      alert('¡Perfil actualizado!');

      // Limpiar formulario si quieres (opcional)
      setUserEmail('');
      setUserPassword('');
      setUserPasswordRepetir('');
    } else {
      alert('Las contraseñas NO coincidian')
    }
  };

  return (
    <div className={perfil.profile_container}>
      <div className={perfil.card}>
          <div className="custom-card-header">
            <div className="custom-header-content">
              <h6 className="custom-header-title">Perfil de Usuario</h6>
            </div>
          </div>

          <div className={perfil.user_info_profile}>
            <img src="/team-7.jpeg" alt="user-photo" className={perfil.avatar_profile}/>
            <div className={perfil.user_details}>
              <p className={perfil.user_name_profile}>{user.username}</p>
              <p className={perfil.user_email_profile}>{user.useremail}</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleUpdate}>
              <ul className={perfil.form_list}>
                <li>
                  <label htmlFor="email">Cambiar correo</label>
                  <input id="email" value={useremail} onChange={(e) => setUserEmail(e.target.value)} placeholder="nuevo correo" type="email" />
                </li>
                <li>
                  <label htmlFor="password">Cambiar contraseña</label>
                  <input id="password" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} placeholder="nueva contraseña" type="password" />
                </li>
                <li>
                  <label htmlFor="repeat-password">Repetir contraseña</label>
                  <input id="repeat-password" value={userpasswordrepetir} onChange={(e) => setUserPasswordRepetir(e.target.value)} placeholder="repetir contraseña" type="password" />
                </li>
                <li className={perfil.button_group}>
                  <button type="submit" className={perfil.btn_accept}>Aceptar</button>
                  <button type="button" className={perfil.btn_cancel}>Cancelar</button>
                </li>
              </ul>
            </form>
          </div>

          <div className={perfil.delete_account_section}>
            <p className={perfil.delete_warning}>¡Advertencia! Eliminar tu cuenta es irreversible.</p>
            <p className={perfil.delete_info}>Al eliminar tu cuenta, perderás todos tus datos y no podrás recuperarlos.</p>
            <button className={perfil.btn_delete}>Eliminar cuenta</button>
          </div>
      </div>
    </div>
  );
}

export default Perfil;