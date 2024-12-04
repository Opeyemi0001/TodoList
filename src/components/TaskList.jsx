import TaskItem from "./TaskItem"

const TaskList = ({tasks, onEdit, onDelete, onToggleComplete}) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  )
}

export default TaskList