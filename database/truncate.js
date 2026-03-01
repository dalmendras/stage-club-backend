const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'stage_club',
  password: process.env.DB_PASSWORD || 'david',
  port: process.env.DB_PORT || 5432,
});

// Orden inverso al de creación para respetar FK (de más dependiente a menos)
const TABLES_DESC = [
  // Nivel 3
  'events_gender',
  'events_project',
  // Nivel 2
  'events',
  'producers_users',
  'project_gallery_images',
  'project_gender',
  'project_members',
  'project_social_links',
  // Nivel 1
  'artist_profiles',
  'musical_projects',
  'producers',
  'venues',
  'company_users',
  // Nivel 0
  'artists',
  'company',
  'users',
  'social_platforms',
  'ma_venue_types',
  'ma_venue_space',
  'ma_venue',
  'ma_region',
  'ma_province',
  'ma_instrument',
  'ma_genders',
  'ma_commune',
  'ma_artist_type',
  'country',
];

async function truncateAll() {
  const client = await pool.connect();
  try {
    console.log('🗑️  Truncando todas las tablas...');

    // Una sola sentencia TRUNCATE con CASCADE resetea las secuencias
    const tableList = TABLES_DESC.map(t => `"public"."${t}"`).join(', ');
    await client.query(`TRUNCATE ${tableList} RESTART IDENTITY CASCADE;`);

    console.log(`✅ ${TABLES_DESC.length} tablas vaciadas y secuencias reiniciadas.`);
  } catch (error) {
    console.error('❌ Error al truncar tablas:', error.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

if (require.main === module) {
  truncateAll();
}

module.exports = { truncateAll };
