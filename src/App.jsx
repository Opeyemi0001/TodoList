
import { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (taskToEdit) {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskToEdit.id ? { ...taskToEdit, ...task } : t))
      );
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  }

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  const toggleCompleteTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task) => {
    setTaskToEdit (task);
  };

  return (
    <>
      <div className='app'>
        <h1>To-Do List</h1>
        <TaskForm
        onSubmit={addOrUpdateTask}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
        />
        <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={deleteTask}
        onToggleComplete={toggleCompleteTask}
        />
      </div>
    </>
  )
}

export default App
