import './Autentificacion.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      useremail.trim().toLowerCase() === "admin@gmail.com" &&
      userpassword.trim() === "1234"
    ) {
      onLogin();
      navigate('/');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-wrapper">
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
        <button type="submit" className="btn-login">Iniciar Sesión</button>
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;