import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import Inicio from './pages/Inicio';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';

// Páginas del organizador
import PaginaTareas from './pages/PaginaTareas';
import PaginaSubtareas from './pages/PaginaSubtareas';
import PaginaCategorias from './pages/PaginaCategorias';
import PaginaEstados from './pages/PaginaEstados';
import PaginaEstadisticas from './pages/PaginaEstadisticas';
import PaginaBusqueda from './pages/PaginaBusqueda';
import PaginaHistorial from './pages/PaginaHistorial';
import PaginaExportar from './pages/PaginaExportar';
import PaginaNotificaciones from './pages/PaginaNotificaciones';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/tareas" element={<PaginaTareas />} />
          <Route path="/subtareas" element={<PaginaSubtareas />} />
          <Route path="/categorias" element={<PaginaCategorias />} />
          <Route path="/estados" element={<PaginaEstados />} />
          <Route path="/estadisticas" element={<PaginaEstadisticas />} />
          <Route path="/busqueda" element={<PaginaBusqueda />} />
          <Route path="/historial" element={<PaginaHistorial />} />
          <Route path="/exportar" element={<PaginaExportar />} />
          <Route path="/notificaciones" element={<PaginaNotificaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
