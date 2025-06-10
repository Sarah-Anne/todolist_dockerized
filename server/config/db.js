// config/db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todolistdb', 'esmt', 'passer', {
  host: 'mysql', 
  port: 3306,
  dialect: 'mysql',
  logging: false,
});


export default sequelize;
