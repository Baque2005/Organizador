// src/components/MotivationalBanner.jsx
import React from 'react';

const MotivationalBanner = () => {
  const frases = [
    "¡Tú puedes con todo! 💪",
    "Sigue adelante, cada tarea te acerca a tu meta 🧠",
    "La disciplina supera al talento. ¡Enfócate! 🎯",
    "Hazlo por ti, por tu futuro 🌟",
  ];
  const frase = frases[Math.floor(Math.random() * frases.length)];

  return (
    <div className="bg-indigo-600 rounded-xl p-4 text-white text-center shadow-md text-lg font-medium">
      {frase}
    </div>
  );
};

export default MotivationalBanner;