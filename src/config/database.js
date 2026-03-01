const { Sequelize } = require('sequelize');
require('dotenv').config();
const initModels = require('../models/init-models');

const DB_NAME = process.env.DB_NAME || 'stage_club';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'david';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 5432;

// Crea la base de datos si no existe conectándose primero a 'postgres' (BD del sistema)
async function ensureDatabase() {
  const admin = new Sequelize({
    database: 'postgres',
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
  });
  try {
    await admin.authenticate();
    const [results] = await admin.query(
      `SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'`
    );
    if (results.length === 0) {
      await admin.query(`CREATE DATABASE "${DB_NAME}"`);
      console.log(`✅ Base de datos "${DB_NAME}" creada.`);
    } else {
      console.log(`✅ Base de datos "${DB_NAME}" ya existe.`);
    }
  } finally {
    await admin.close();
  }
}

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Función para probar la conexión
async function testConnection() {
  await sequelize.authenticate();
  console.log('✅ Conexión a la base de datos establecida correctamente.');
}

const models = initModels(sequelize);

// Sincroniza los modelos en orden topológico para respetar las FK
async function syncModels() {
  const opts = { alter: true };

  // Nivel 0: tablas sin FK a otras tablas de la app
  await Promise.all([
    models.country.sync(opts),
    models.ma_artist_type.sync(opts),
    models.ma_commune.sync(opts),
    models.ma_genders.sync(opts),
    models.ma_instrument.sync(opts),
    models.ma_province.sync(opts),
    models.ma_region.sync(opts),
    models.ma_venue.sync(opts),
    models.ma_venue_space.sync(opts),
    models.ma_venue_types.sync(opts),
    models.social_platforms.sync(opts),
    models.users.sync(opts),
    models.company.sync(opts),
    models.artists.sync(opts),
  ]);

  // Nivel 1: FK a nivel 0
  await Promise.all([
    models.artist_profiles.sync(opts),
    models.musical_projects.sync(opts),
    models.producers.sync(opts),
    models.venues.sync(opts),
    models.company_users.sync(opts),
  ]);

  // Nivel 2: FK a nivel 1
  await Promise.all([
    models.events.sync(opts),
    models.producers_users.sync(opts),
    models.project_gallery_images.sync(opts),
    models.project_gender.sync(opts),
    models.project_members.sync(opts),
    models.project_social_links.sync(opts),
  ]);

  // Nivel 3: FK a nivel 2
  await Promise.all([
    models.events_gender.sync(opts),
    models.events_project.sync(opts),
  ]);
}

module.exports = {
  sequelize,
  ensureDatabase,
  testConnection,
  syncModels,
  models,
  Sequelize,
  ...models
};
