import reactLogo from './assets/react.svg';
import './App.css';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';

function App() {
  return (
    <div className='App'>
      <h1>Lista de tareas</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
