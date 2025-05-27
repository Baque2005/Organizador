// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ onLogout, user }) => {
  return (
    <header className="w-full flex justify-between items-center mb-10">
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/LogoUGcolor.png/768px-LogoUGcolor.png"
          alt="Logo UG"
          className="h-14"
        />
        <img
          src="https://i.ibb.co/XZQSRpWX/Imagen-de-Whats-App-2025-05-25-a-las-16-33-59-9c2520bc.jpg"
          alt="Systeclinx Logo"
          className="h-14"
        />
        <h1 className="text-3xl font-bold">Systeclinx</h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-white/80 text-sm hidden md:block">👤 {user?.nombre}</p>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition shadow-md"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Navbar;