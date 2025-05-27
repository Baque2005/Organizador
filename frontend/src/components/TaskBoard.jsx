// src/components/TaskBoard.jsx
import React from 'react';
import TaskCard from './TaskCard';

const TaskBoard = () => {
  const tareasEjemplo = [
    { title: 'Terminar informe de estructuras', status: 'En Progreso' },
    { title: 'Estudiar para examen de SO', status: 'Pendiente' },
    { title: 'Subir avance del proyecto', status: 'Completada' },
  ];

  return (
    <div className="grid gap-4">
      {tareasEjemplo.map((tarea, i) => (
        <TaskCard key={i} title={tarea.title} status={tarea.status} />
      ))}
    </div>
  );
};

export default TaskBoard;