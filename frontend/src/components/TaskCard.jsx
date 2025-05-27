// src/components/TaskCard.jsx
import React from 'react';

const TaskCard = ({ title, status }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl shadow-md">
      <h4 className="text-white text-lg font-semibold">{title}</h4>
      <p className="text-white/70 text-sm">Estado: {status}</p>
    </div>
  );
};

export default TaskCard;