import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.js';
import todoRoutes from './routes/TaskRoute.js';
import cors from 'cors';

const app = express();
const PORT = 4040;


app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));

app.use(bodyParser.json());


app.use('/api', todoRoutes);

// Synchronisation avec la base de données
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API ToDo List !');
});
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erreur de synchronisation avec la base de données :', err);
  });
