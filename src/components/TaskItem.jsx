
const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div>
        <h4>{task.name}</h4>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={()=> onDelete(task.id)}>Delete</button>
      </div>

    </div>
  )
}

export default TaskItem