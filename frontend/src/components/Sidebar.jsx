// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col space-y-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl h-fit">
      <h3 className="text-xl font-semibold text-white/80">Filtros</h3>
      <button className="text-left hover:text-indigo-300 text-white">📅 Hoy</button>
      <button className="text-left hover:text-indigo-300 text-white">🗓 Esta semana</button>
      <button className="text-left hover:text-indigo-300 text-white">✅ Completadas</button>
      <button className="text-left hover:text-indigo-300 text-white">📌 Importantes</button>
    </aside>
  );
};

export default Sidebar;