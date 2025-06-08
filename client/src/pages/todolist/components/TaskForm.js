import React, { useState, useEffect } from 'react';

function TaskForm({ onAdd, onUpdate, selectedTask }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
    } else {
      setTitle('');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (selectedTask) {
      onUpdate(selectedTask.id, title);
    } else {
      onAdd(title);
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button type="submit" className="add-btn">
        ➕ {selectedTask ? 'Modifier' : 'Ajouter'}
      </button>
      
    </form>
  );
}

export default TaskForm;
