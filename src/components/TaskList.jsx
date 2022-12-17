// import { useState, useEffect } from 'react';
import { TaskItem } from './TaskItem';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.lenght === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
}
