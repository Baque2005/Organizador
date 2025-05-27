// src/components/ProgressTracker.jsx
import React from 'react';

const ProgressTracker = ({ pendientes, enProgreso, completadas }) => {
  const total = pendientes + enProgreso + completadas;
  const completadoPorcentaje = total > 0 ? (completadas / total) * 100 : 0;

  return (
    <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden shadow-inner mt-4">
      <div
        className="bg-green-400 h-full transition-all duration-500"
        style={{ width: `${completadoPorcentaje}%` }}
      ></div>
    </div>
  );
};

export default ProgressTracker;