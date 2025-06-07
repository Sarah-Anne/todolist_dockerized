import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';
import './styles/style.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4040/api/todolist')
      .then(res => setTasks(res.data))
      .catch(err => console.error("Erreur de chargement :", err));
  }, []);

  const addTask = (title) => {
    axios.post('http://localhost:4040/api/newtask', { title })
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.error("Erreur ajout :", err));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:4040/api/todos/${id}`)
      .then(() => setTasks(tasks.filter(t => t.id !== id)))
      .catch(err => console.error("Erreur suppression :", err));
  };


  // changer l'etat de la tache
  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    axios.put(`http://localhost:4040/api/todos/${id}`, { completed: !task.completed })
      .then(res => setTasks(tasks.map(t => t.id === id ? res.data : t)))
      .catch(err => console.error("Erreur toggle :", err));
  };


  // modier le nom de la tache
  const updateTask = (id, newTitle) => {
    axios.put(`http://localhost:4040/api/newTaskName/${id}`, { title: newTitle })
      .then(res => {
        setTasks(tasks.map(t => t.id === id ? res.data : t));
        setSelectedTask(null);
      })
      .catch(err => console.error("Erreur modif :", err));
  };

  return (
    <div className="container">
      <h1>Ma ToDo List</h1>
      <TaskForm onAdd={addTask} onUpdate={updateTask} selectedTask={selectedTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={setSelectedTask} />
    </div>
  );
}

export default Home;
