import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar({ onLogout }) {
  const location = useLocation(); // 👈 Saber la ruta actual

  // Función para saber si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidenav" id="sidenav-main">
      <div className="collapse" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {/* Inicio */}
          <li>
            <Link className={`nav-link ${isActive("/") ? "active" : ""}`} to="/">
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className="nav-link-text">Inicio</span>
            </Link>
          </li>
          {/* Tareas */}
          <li>
            <Link className={`nav-link ${isActive("/tareas") ? "active" : ""}`} to="/tareas">
              <i className="material-symbols-rounded opacity-5">assignment</i>
              <span className="nav-link-text">Tareas</span>
            </Link>
          </li>
          {/* Grupos */}
          <li>
            <Link className={`nav-link ${isActive("/grupos") ? "active" : ""}`} to="/grupos">
              <i className="material-symbols-rounded opacity-5">groups</i>
              <span className="nav-link-text">Grupos</span>
            </Link>
          </li>
          {/* Notificaciones */}
          <li>
            <Link className={`nav-link ${isActive("/notificaciones") ? "active" : ""}`} to="/notificaciones">
              <i className="material-symbols-rounded opacity-5">notifications</i>
              <span className="nav-link-text">Notificaciones</span>
            </Link>
          </li>
          {/* Dashbord de productividad */}
          <li>
            <Link className={`nav-link ${isActive("/dashboard") ? "active" : ""}`} to="/dashboard">
              <i className="material-symbols-rounded opacity-5">analytics</i>
              <span className="nav-link-text">dashboard</span>
            </Link>
          </li>
          {/* Opciones de Cuenta */}
          <li className="section-title">
            <h6>Opciones de Cuenta</h6>
          </li>
          {/* Perfil */}
          <li>
            <Link className={`nav-link ${isActive("/perfil") ? "active" : ""}`} to="/perfil">
              <i className="material-symbols-rounded opacity-5">person</i>
              <span className="nav-link-text">Perfil</span>
            </Link>
          </li>
          {/* Cerrar sesión */}
          <li>
            <Link className="nav-link" to="/sign-in" onClick={onLogout}>
              <i className="material-symbols-rounded opacity-5">login</i>
              <span className="nav-link-text">Cerrar Sesión</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;