import './Autentificacion.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userpasswordconfirm, setUserpasswordconfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Usuario registrado:', username);
    navigate('/login'); // Redirige al login después de registrarse
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister} className="form-wrapper">
        <input 
          className="form-control"
          id="user"
          type="text" 
          placeholder="Nombre de Usuario" 
          name="user" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          className="form-control"
          id="email" 
          type="text" 
          placeholder="Correo" 
          name="email" 
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <input 
          className="form-control"
          id="password" 
          type="password" 
          placeholder="Contraseña" 
          name="password" 
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />
        <input 
          className="form-control"
          id="password_confirmation" 
          type="password" 
          placeholder="Repetir Contraseña" 
          name="password_confirmation" 
          value={userpasswordconfirm}
          onChange={(e) => setUserpasswordconfirm(e.target.value)}
        />
        <button type="submit" className="btn-register">Registrarse </button>
        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
    
  );
}

export default Register;