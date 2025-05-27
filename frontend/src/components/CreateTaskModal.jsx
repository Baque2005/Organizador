// src/components/CreateTaskModal.jsx
import React from 'react';

const CreateTaskModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-indigo-700">Crear Nueva Tarea</h2>
        <p className="text-gray-700">Aquí irá el formulario para crear una tarea. (Visual por ahora)</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-xl">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;