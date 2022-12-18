import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import '../style/TaskItem.css';

export function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div
      className={
        task.active
          ? 'task-card task-item-color-active'
          : 'task-card task-item-color-inactive'
      }
    >
      <h3 style={{textTransform: 'uppercase'}}>{task.title}</h3>
      <hr />
      <p style={{textTransform: 'full-width', fontSize: '21px'}}>{task.description}</p>
      <button
        style={{ backgroundColor: 'darkred', margin: '5px' }}
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
      {task.active ? (
        <button
          style={{ backgroundColor: 'darkgreen', margin: '5px' }}
          onClick={() => toggleTask(task.id)}
        >
          Completar
        </button>
      ) : (
        <button
          style={{ backgroundColor: 'rgb(200, 100, 0)', margin: '5px' }}
          onClick={() => toggleTask(task.id)}
        >
          Descmarcar
        </button>
      )}
    </div>
  );
}
