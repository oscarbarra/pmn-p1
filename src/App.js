
import './styles/App.css';
import { useState } from 'react';
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

  return (
    <Router>
      <div className={`app-container ${isAuthenticated ? 'with-sidebar' : ''}`}>
        {isAuthenticated && <Sidebar onLogout={() => setIsAuthenticated(false)} />}
        <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/register" element={<Register />} />
          
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
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <TablaDeTareas />
              </ProtectedRoute>
            }
          />

          <Route
            path="/grupos"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Grupos />
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
                <Perfil />
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