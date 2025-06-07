import React from 'react';

function Task({ task, onDelete, onToggle, onEdit }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="content" onClick={() => onToggle(task.id)}>
        {task.title}
      </div>
      <div className="buttons">
        <button onClick={() => onEdit(task)}>✏️</button>
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default Task;
