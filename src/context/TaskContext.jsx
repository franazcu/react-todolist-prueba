import { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../services/tasks';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  function createTask({ title, description }) {
    setTasks([
      ...tasks,
      {
        title: title,
        id: uuidv4(),
        description: description,
        active: true,
      },
    ]);
  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, active: !task.active } : task
    );
    setTasks(updatedTasks);
  }

  // ---- OTRA FORMA CON IF ----

  // function toggleTask (taskId) {
  //   const updatedTasks = tasks.map (task => {
  //       if (task.id === taskId) {
  //         task.active = !task.active;
  //       }
  //       return task //VER SI FUNCIONA ADENTRO DEL IF
  //     });
  //     setTasks(updatedTasks)
  // }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        toggleTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
