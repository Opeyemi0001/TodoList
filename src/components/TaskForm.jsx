import React, { useEffect, useState } from 'react'

const TaskForm = ({ onSubmit, taskToEdit, setTaskEdit }) => {
  const [ task, setTask ] = useState({name: "", description: ""});

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({name: "", description: ""});
    }
  },[taskToEdit]);

  const handleChange = (e) => {
    setTask({...task, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!task.name || !task.description) {
      alert("Both fields are required!");
      return;
    }
    onSubmit(task);
    setTask({name: "", description: ""});
    setTaskEdit(null); 
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit} className='task-form'>
        <input 
        type="text"
        name='name'
        placeholder='Task Name'
        value={task.name}
        onChange={handleChange}
        required
        />
        <textarea
        name='description'
        placeholder='Task Description'
        value={task.description}
        onChange={handleChange}
        required
        />
        <button type='submit'>{taskToEdit ? "Update Task" : "Add Task"}</button>

      </form>
    </div>
  );
};

export default TaskForm