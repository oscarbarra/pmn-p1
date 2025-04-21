
import './styles/App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Sidebar from './components/Sidebar';
import Home from './Home';
import Tareas from './Tareas';
import Notificaciones from './Notificaciones';
import Perfil from './Perfil';
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
                <Tareas />
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