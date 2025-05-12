import './styles/App.css';
import fakeUsers from './constantes/fakeUsers';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import TablaDeTareas from './pages/tasks/TablaDeTareas';
import Grupos from './pages/groups/Grupos';
import Notificaciones from './pages/notifications/Notificaciones';
import Dashboard from './pages/dashboard/Dashboard';
import Perfil from './pages/profile/Perfil';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [tareasCreadas, setTareasCreadas] = useState([]);

  const updateCurrentUser = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  class PrototipoTareas {
    constructor(
      id,
      titulo,
      descripcion,
      prioridad,
      estado,
      fechaCreacion,
      fechaLimite,
      correoUsuario,
      nombreLider,
      correoLider,
      nombreGrupo,
      rolEnGrupo
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.prioridad = prioridad;
      this.estado = estado;
      this.fechaCreacion = fechaCreacion;
      this.fechaLimite = fechaLimite;
      this.correoUsuario = correoUsuario;
      this.nombreLider = nombreLider;
      this.correoLider = correoLider;
      this.nombreGrupo = nombreGrupo;
      this.rolEnGrupo = rolEnGrupo;
    }

    marcarComoCompletada() {
      this.estado = "Completada";
    }

    estaVencida() {
      const hoy = new Date();
      const limite = new Date(this.fechaLimite);
      return hoy > limite;
    }
  }

  const tareasRaw = [
    {
      id: 1,
      titulo: "Generar formulario de inicio de sesión",
      descripcion: "Crear un formulario funcional con validación",
      prioridad: "Alta",
      estado: "Finalizada",
      fechaCreacion: "2024-12-01",
      fechaLimite: "2024-12-30",
      correoUsuario: "obarra@gmail.com",
      nombreLider: "Cristhofer Jara",
      correoLider: "crithofer@gmail.com",
      nombreGrupo: "Grupo 1",
      rolEnGrupo: "miembro"
    },
    {
      id: 2,
      titulo: "Diseñar dashboard",
      descripcion: "Diseño UI/UX del panel principal",
      prioridad: "Media",
      estado: "En Proceso",
      fechaCreacion: "2025-05-01",
      fechaLimite: "2025-05-19",
      correoUsuario: "obarra@gmail.com",
      nombreLider: "Cristhofer Jara",
      correoLider: "crithofer@gmail.com",
      nombreGrupo: "Grupo 2",
      rolEnGrupo: "miembro"
    },
    {
      id: 3,
      titulo: "Diseñar dashboard",
      descripcion: "Diseño UI/UX del panel principal",
      prioridad: "Media",
      estado: "En Proceso",
      fechaCreacion: "2025-05-01",
      fechaLimite: "2025-05-19",
      correoUsuario: "obarra@gmail.com",
      nombreLider: "Cristhofer Jara",
      correoLider: "crithofer@gmail.com",
      nombreGrupo: "Grupo 2",
      rolEnGrupo: "miembro"
    },
    {
      id: 4,
      titulo: "Generar formulario de inicio de sesión",
      descripcion: "Crear un formulario funcional con validación",
      prioridad: "Alta",
      estado: "En Proceso",
      fechaCreacion: "2025-05-01",
      fechaLimite: "2025-05-30",
      correoUsuario: "obarra@gmail.com",
      nombreLider: "Felipe Ocampos",
      correoLider: "felipe@gmail.com",
      nombreGrupo: "Grupo 3",
      rolEnGrupo: "miembro"
    },
    {
      id: 5,
      titulo: "Diseñar dashboard",
      descripcion: "Diseño UI/UX del panel principal",
      prioridad: "Media",
      estado: "Finalizada",
      fechaCreacion: "2023-01-15",
      fechaLimite: "2023-02-19",
      correoUsuario: "admin@gmail.com",
      nombreLider: "Cristhofer Jara",
      correoLider: "crithofer@gmail.com",
      nombreGrupo: "Grupo 4",
      rolEnGrupo: "miembro"
    },
    {
      id: 6,
      titulo: "Diseñar dashboard",
      descripcion: "Diseño UI/UX del panel principal",
      prioridad: "Media",
      estado: "En Proceso",
      fechaCreacion: "2025-05-05",
      fechaLimite: "2025-05-29",
      correoUsuario: "admin@gmail.com",
      nombreLider: "Snaw Flake",
      correoLider: "snawflk@gmail.com",
      nombreGrupo: "Grupo 6",
      rolEnGrupo: "miembro"
    }
  ];

  useEffect(() => {
    const tareasIniciales = tareasRaw.map(t => new PrototipoTareas(
      t.id, t.titulo, t.descripcion, t.prioridad, t.estado, t.fechaCreacion,
      t.fechaLimite, t.correoUsuario, t.nombreLider, t.correoLider,
      t.nombreGrupo, t.rolEnGrupo
    ));
    setTareasCreadas(tareasIniciales);
  }, []);

  return (
    <Router>
      <div className={`app-container ${isAuthenticated ? 'with-sidebar' : ''}`}>
        {isAuthenticated && <Sidebar onLogout={() => {setCurrentUser(null); setIsAuthenticated(false)}} />}
        <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login onLogin={(user) => {setCurrentUser(user); setIsAuthenticated(true)}} users={fakeUsers}/>} />
          <Route path="/register" element={<Register users={fakeUsers}/>} />
          
          <Route
            path="/"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tareas"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} tareasCreadas={tareasCreadas}>
                <TablaDeTareas user={currentUser} tareasCreadas={tareasCreadas} setTareasCreadas={setTareasCreadas}/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/grupos"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Grupos users={fakeUsers} tareasCreadas={tareasCreadas} setTareasCreadas={setTareasCreadas}/>
              </ProtectedRoute>
            }
          />

          <Route
            path="/notificaciones"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Notificaciones />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/perfil"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Perfil user={currentUser} onUpdateUser={updateCurrentUser}/>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
