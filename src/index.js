const express = require('express');
require('dotenv').config();

const { sequelize, ensureDatabase, testConnection, syncModels } = require('./config/database');
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Api routes
routerApi(app);

// Home route
app.get('/', (req, res) => {
  res.send('Backend Stage Club');
});

async function startServer() {
  try {
    await ensureDatabase();
    await testConnection();

    await syncModels();
    console.log('✅ Esquema sincronizado con PostgreSQL.');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error iniciando servidor:', error);
    process.exit(1);
  }
}

startServer();