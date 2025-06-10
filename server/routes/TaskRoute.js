import express from 'express';
import Todo from '../models/TodoModel.js';

const router = express.Router();

// Créer une tâche
router.post('/newtask', async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtenir toutes les tâches
router.get('/todolist', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// changer le nom de la tache
router.put('/newTaskName/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    // Vérifie si un nouveau titre est fourni
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Le titre est requis' });
    }

    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Tâche non trouvée' });
    }

    todo.title = title;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Marquer une tâche comme complétée
// Inverser l'état completed de la tâche
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByPk(id);
    if (!todo) return res.status(404).json({ error: 'Tâche non trouvée' });

    // Inverser l'état actuel
    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Supprimer une tâche
router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Tâche non trouvée' });

    res.json({ message: 'Tâche supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
