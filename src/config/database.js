const { Sequelize } = require('sequelize');
require('dotenv').config();
const initModels = require('../models/init-models');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  database: process.env.DB_NAME || 'stage_club',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'david',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres',
  logging: console.log, // Cambiar a false para desactivar logs SQL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Función para probar la conexión
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('❌ No se pudo conectar a la base de datos:', error);
  }
}

const models = initModels(sequelize)

module.exports = {
  sequelize,
  testConnection,
  models
};
