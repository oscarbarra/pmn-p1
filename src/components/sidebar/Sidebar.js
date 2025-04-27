import React from "react";
import { Link } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar({ onLogout }) {
  return (
    <aside className="sidenav" id="sidenav-main">
      <div className="collapse" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {/* Inicio */}
          <li>
            <Link className="nav-link active" to="/">
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className="nav-link-text">Inicio</span>
            </Link>
          </li>
          {/* Tareas */}
          <li>
            <Link className="nav-link" to="/tareas">
              <i className="material-symbols-rounded opacity-5">table_view</i>
              <span className="nav-link-text">Tareas</span>
            </Link>
          </li>
          {/* Notificaciones */}
          <li>
            <Link className="nav-link" to="/notificaciones">
              <i className="material-symbols-rounded opacity-5">notifications</i>
              <span className="nav-link-text">Notificaciones</span>
            </Link>
          </li>
          {/* Opciones de Cuenta */}
          <li className="section-title">
            <h6>Opciones de Cuenta</h6>
          </li>
          {/* Perfil */}
          <li >
            <Link className="nav-link" to="/perfil">
              <i className="material-symbols-rounded opacity-5">person</i>
              <span className="nav-link-text">Perfil</span>
            </Link>
          </li>
          {/* Cerrar sesión */}
          <li>
            <Link className="nav-link" to="/sign-in" onClick={{ onLogout }}>
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