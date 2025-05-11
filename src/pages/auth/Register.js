import auth from './Autentificacion.module.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register({ users }) {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userpasswordconfirm, setUserpasswordconfirm] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Validaciones básicas
    if (!username || !useremail || !userpassword || !userpasswordconfirm) {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    // Verificar si usuario ya existe
    const exists = users.find(u => u.username === username && u.useremail === useremail);
    if (exists) {
      alert('El usuario ya existe.');
      return;
    }
  
    // Validar coincidencia de contraseñas
    if (userpassword !== userpasswordconfirm) {
      alert('Las contraseñas no coinciden.');
      return;
    }
  
    // Si todo está bien, registrar usuario
    users.push({ username, useremail, userpassword });
    console.log(users);
    alert('Registro exitoso');
    navigate('/login');
  };

  return (
    <div className={auth.container}>
      <form onSubmit={handleRegister} className={auth.form_wrapper}>
        <input 
          className={auth.form_control}
          id="user"
          type="text" 
          placeholder="Nombre de Usuario" 
          name="user" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input 
          className={auth.form_control}
          id="password_confirmation" 
          type="password" 
          placeholder="Repetir Contraseña" 
          name="password_confirmation" 
          value={userpasswordconfirm}
          onChange={(e) => setUserpasswordconfirm(e.target.value)}
        />
        <button type="submit" className={auth.btn_register}>Registrarse </button>
        <p className={auth.login_link}>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
    
  );
}

export default Register;