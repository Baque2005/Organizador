import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logoUG from '../assets/LogoUGcolor.png';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_BASE_URL;
const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
      correo,
      contrasena
    });

    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // redirige al dashboard
    }

    setMensaje(res.data.mensaje || 'Inicio de sesión exitoso');
  } catch (err) {
    if (err.response?.data?.mensaje) {
      setMensaje(err.response.data.mensaje);
    } else {
      setMensaje('❌ Error al iniciar sesión. Intenta de nuevo.');
    }
  }
};

 return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1950&q=80"
          alt="Background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-blue-900 opacity-40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md text-white overflow-hidden min-h-[650px] flex flex-col">
        <div className="bg-white flex items-center justify-center py-6">
          <img src={logoUG} alt="Logo UG" className="h-20" />
        </div>

        <div className="p-10 flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Iniciar Sesión
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="email" placeholder="Correo electrónico" className="w-full p-4 border border-white bg-transparent rounded-xl placeholder-gray-300 text-white" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
            <input type="password" placeholder="Contraseña" className="w-full p-4 border border-white bg-transparent rounded-xl placeholder-gray-300 text-white" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
            <button type="submit" className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-400 transition duration-200 font-semibold">
              Ingresar
            </button>
          </form>

          {mensaje && (
            <p className="mt-6 text-center text-sm text-yellow-300">{mensaje}</p>
          )}

          <p className="mt-8 text-center text-sm text-gray-200">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-cyan-400 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>

        {/* Pie de página decorado */}
        <div className="bg-white/10 text-xs text-gray-200 text-center py-4 px-6 border-t border-gray-400/20">
          <p>Desarrollado por Ronald Baque, Briggitte Mora, Jennifer Malave y Damian Leon</p>
          <p className="mt-2 font-semibold">© 2025 SYSTECLINX. Todos los derechos reservados.</p>
          <p className="mt-1 text-cyan-300">¡Gracias por confiar en nosotros!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;