import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoUG from '../assets/LogoUGcolor.png';
import {
  ClipboardDocumentListIcon,
  Bars3BottomLeftIcon,
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  DocumentArrowDownIcon,
  BellIcon
} from '@heroicons/react/24/outline';

const Inicio = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/Login');
  };

  const opciones = [
    { title: 'Gestionar Tareas', icon: <ClipboardDocumentListIcon className="h-6 w-6" />, path: '/tareas' },
    { title: 'Subtareas', icon: <Bars3BottomLeftIcon className="h-6 w-6" />, path: '/subtareas' },
    { title: 'Categorías y Prioridades', icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />, path: '/categorias' },
    { title: 'Estados de Tareas', icon: <CheckCircleIcon className="h-6 w-6" />, path: '/estados' },
    { title: 'Estadísticas Visuales', icon: <ChartBarIcon className="h-6 w-6" />, path: '/estadisticas' },
    { title: 'Filtros y Búsqueda', icon: <MagnifyingGlassIcon className="h-6 w-6" />, path: '/busqueda' },
    { title: 'Historial de Cambios', icon: <PencilSquareIcon className="h-6 w-6" />, path: '/historial' },
    { title: 'Exportar a PDF/CSV', icon: <DocumentArrowDownIcon className="h-6 w-6" />, path: '/exportar' },
    { title: 'Notificaciones', icon: <BellIcon className="h-6 w-6" />, path: '/notificaciones' },
  ];

  const handleNavigate = (path) => navigate(path);

  return (
    <div className="min-h-screen flex bg-slate-900 text-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-indigo-900 p-6 flex flex-col space-y-4 shadow-lg">
        <div className="flex items-center space-x-3 mb-8">
          <img src={logoUG} alt="Logo UG" className="h-10" />
          <h1 className="text-2xl font-bold">SYSTECLINX</h1>
        </div>
        {opciones.map((op, i) => (
          <button
            key={i}
            onClick={() => handleNavigate(op.path)}
            className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-left"
          >
            {op.icon}
            <span>{op.title}</span>
          </button>
        ))}
        <div className="mt-auto text-sm">
          <p className="mb-2">Bienvenido, <span className="font-semibold">{usuario?.nombres ?? 'Usuario'}</span></p>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 space-y-8 bg-gradient-to-br from-slate-800 to-slate-900">
        <section className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Tareas Recientes</h2>
          <ul className="space-y-3">
            {[ 'Revisar entrega del proyecto final', 'Completar informe de avances', 'Enviar feedback al grupo 3', 'Programar reunión con el tutor' ].map((task, idx) => (
              <li key={idx} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
                <span>{task}</span>
                <span className="text-xs text-gray-500">Pendiente</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Recordatorios</h2>
          <div className="space-y-3">
            {[ { date: '25/05', text: 'Entregar actividad de Estructura de Datos' }, { date: '27/05', text: 'Revisión de código en grupo' }, { date: '29/05', text: 'Evaluación parcial' } ].map((reminder, idx) => (
              <div key={idx} className="flex justify-between bg-yellow-100 text-yellow-900 px-4 py-2 rounded-lg">
                <span className="font-medium">{reminder.date}</span>
                <span className="text-sm">{reminder.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white text-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Resumen del Organizador</h2>
          <p className="text-gray-700 text-sm">
            Bienvenido a tu panel organizador. Desde aquí puedes navegar entre tareas, subtareas, establecer prioridades,
            monitorear tu progreso y recibir recordatorios importantes. Haz clic en el menú de la izquierda para comenzar a gestionar tus pendientes de forma eficaz.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Inicio;
