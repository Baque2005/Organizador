import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoUG from '../assets/LogoUGcolor.png'; // Asegúrate de tener esta imagen en assets
import { BellIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/outline';

const Inicio = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-800 to-slate-900 text-white flex flex-col items-center p-6 md:p-10">
      {/* HEADER */}
      <header className="w-full max-w-7xl flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <img src={logoUG} alt="Logo UG" className="h-12" />
          <h1 className="text-3xl font-bold tracking-tight">SYSTECLINX</h1>
        </div>
        <div className="text-right">
          <p className="text-sm">
            Bienvenido, <span className="font-semibold">{usuario?.nombres ?? 'Usuario'}</span>
          </p>
          <button
            onClick={handleLogout}
            className="mt-2 px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funcionalidades principales */}
        <section className="col-span-2 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Panel de Funcionalidades</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <ClipboardDocumentListIcon className="h-10 w-10 text-indigo-600" />,
                title: 'Gestionar Tareas',
                desc: 'Crea, edita, organiza y elimina tus tareas según prioridad y fecha.',
              },
              {
                icon: <UserIcon className="h-10 w-10 text-green-600" />,
                title: 'Asignaciones Grupales',
                desc: 'Coordina tareas entre miembros del equipo y establece responsables.',
              },
              {
                icon: <BellIcon className="h-10 w-10 text-yellow-600" />,
                title: 'Recordatorios',
                desc: 'Recibe alertas automáticas sobre tareas próximas a vencer.',
              },
              {
                icon: (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    className="h-10 w-10"
                    alt="Estadísticas"
                  />
                ),
                title: 'Estadísticas de Actividad',
                desc: 'Visualiza tu progreso semanal y el cumplimiento de tus metas.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vista previa tareas del usuario */}
        <section className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4">Tareas Recientes</h2>
          <ul className="space-y-3">
            {[
              'Revisar entrega del proyecto final',
              'Completar informe de avances',
              'Enviar feedback al grupo 3',
              'Programar reunión con el tutor',
            ].map((task, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                <span>{task}</span>
                <span className="text-xs text-gray-500">Pendiente</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recordatorios o notificaciones */}
        <section className="col-span-1 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-4">Recordatorios</h2>
          <div className="space-y-3">
            {[
              { date: '25/05', text: 'Entregar actividad de Estructura de Datos' },
              { date: '27/05', text: 'Revisión de código en grupo' },
              { date: '29/05', text: 'Evaluación parcial' },
            ].map((reminder, idx) => (
              <div
                key={idx}
                className="flex justify-between bg-yellow-100 text-yellow-900 px-4 py-2 rounded-lg"
              >
                <span className="font-medium">{reminder.date}</span>
                <span className="text-sm">{reminder.text}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-16 border-t border-white/30 pt-6 text-center text-sm text-white/80">
        <p>© 2025 SYSTECLINX - Universidad de Guayaquil</p>
        <p>Desarrollado por Ronald Baque y equipo académico</p>
      </footer>
    </div>
  );
};

export default Inicio;