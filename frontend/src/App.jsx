import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import Inicio from './pages/Inicio';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/inicio" element={<Inicio />} />
   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;