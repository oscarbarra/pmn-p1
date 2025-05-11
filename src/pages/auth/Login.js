import auth from './Autentificacion.module.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ onLogin, users }) {
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar campos vacíos
    if (!useremail || !userpassword) {
      alert('Por favor ingresa tu correo y contraseña.');
      return;
    }
  
    // Buscar usuario
    const userFound = users.find(
      u => u.useremail === useremail && u.userpassword === userpassword
    );
  
    if (userFound) {
      onLogin(userFound);
      navigate('/');
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className={auth.container}>
      <form onSubmit={handleSubmit} className={auth.form_wrapper}>
        <input
          className={auth.form_control}
          id="email"
          type="text"
          placeholder="Correo"
          name="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <input
          className={auth.form_control}
          id="password"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
        />
        <button type="submit" className={auth.btn_login}>Iniciar Sesión</button>
        <p className={auth.register_link}>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;