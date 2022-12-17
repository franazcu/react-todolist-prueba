import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../style/TaskItem.css';

export function TaskItem({ task }) {
  const { deleteTask, clickTask } = useContext(TaskContext);

  return (
    <div
      className={
        task.active
          ? 'task-card task-item-color-active'
          : 'task-card task-item-color-inactive'
      }
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button
        style={{ backgroundColor: 'darkred', margin: '5px' }}
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
      {task.active ? (
        <button
          style={{ backgroundColor: 'darkgreen', margin: '5px' }}
          onClick={() => clickTask(task.id)}
        >
          Completar
        </button>
      ) : (
        <button
          style={{ backgroundColor: 'rgb(200, 100, 0)', margin: '5px' }}
          onClick={() => clickTask(task.id)}
        >
          Descmarcar
        </button>
      )}
    </div>
  );
}
