import React from "react";
import { Link, useLocation } from 'react-router-dom';
import sidebar from "./Sidebar.module.css";

function Sidebar({ onLogout }) {
  const location = useLocation(); // 👈 Saber la ruta actual

  // Función para saber si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={sidebar.sidenav} id="sidenav-main">
      <div className={sidebar.collapse} id="sidenav-collapse-main">
        <ul className={sidebar.navbar_nav}>
          {/* Inicio */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/") ? sidebar.active : ""}`} to="/">
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className={sidebar.nav_link_text}>Inicio</span>
            </Link>
          </li>
          {/* Tareas */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/tareas") ? sidebar.active : ""}`} to="/tareas">
              <i className="material-symbols-rounded opacity-5">assignment</i>
              <span className={sidebar.nav_link_text}>Tareas</span>
            </Link>
          </li>
          {/* Grupos */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/grupos") ? sidebar.active : ""}`} to="/grupos">
              <i className="material-symbols-rounded opacity-5">groups</i>
              <span className={sidebar.nav_link_text}>Grupos</span>
            </Link>
          </li>
          {/* Notificaciones */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/notificaciones") ? sidebar.active : ""}`} to="/notificaciones">
              <i className="material-symbols-rounded opacity-5">notifications</i>
              <span className={sidebar.nav_link_text}>Notificaciones</span>
            </Link>
          </li>
          {/* Dashbord de productividad */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/dashboard") ? sidebar.active : ""}`} to="/dashboard">
              <i className="material-symbols-rounded opacity-5">analytics</i>
              <span className={sidebar.nav_link_text}>dashboard</span>
            </Link>
          </li>
          {/* Opciones de Cuenta */}
          <li className={sidebar.section_title}>
            <h6>Opciones de Cuenta</h6>
          </li>
          {/* Perfil */}
          <li>
            <Link className={`${sidebar.nav_link} ${isActive("/perfil") ? sidebar.active : ""}`} to="/perfil">
              <i className="material-symbols-rounded opacity-5">person</i>
              <span className={sidebar.nav_link_text}>Perfil</span>
            </Link>
          </li>
          {/* Cerrar sesión */}
          <li>
            <Link className={sidebar.nav_link} to="/login" onClick={onLogout}>
              <i className="material-symbols-rounded opacity-5">login</i>
              <span className={sidebar.nav_link_text}>Cerrar Sesión</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;