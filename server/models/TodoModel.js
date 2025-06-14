// models/Todo.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Todo;
