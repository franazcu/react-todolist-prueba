import React from 'react';
import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export function TaskForm() {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, description);
    setTitle('');
    setDescription('');
    createTask({
      title,
      description,
    }); //envio el title como paramatro a la funcion createTask, para que se ejecute con ese param en App
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <h2>Añade una tarea:</h2>
      <input
        placeholder='Escribe tu tarea...'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <br />
      <input
        placeholder='Escribe una descripción...'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <button>Guardar</button>
    </form>
  );
}
