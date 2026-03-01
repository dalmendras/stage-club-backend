const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'stage_club',
  password: process.env.DB_PASSWORD || 'david',
  port: process.env.DB_PORT || 5432,
});

const SEED_DIR = path.join(__dirname, 'stage-club-data', 'seed');

// Orden topológico: primero tablas sin FK, luego las dependientes.
// Solo se ejecutan los archivos que existan en la carpeta seed.
const SEED_ORDER = [
  // Nivel 0 — sin dependencias
  'country',
  'ma_artist_type',
  'ma_commune',
  'ma_genders',
  'ma_instrument',
  'ma_province',
  'ma_region',
  'ma_venue',
  'ma_venue_space',
  'ma_venue_types',
  'social_platforms',
  'users',
  'company',
  'artists',
  // Nivel 1
  'artist_profiles',
  'musical_projects',
  'producers',
  'venues',
  'company_users',
  // Nivel 2
  'events',
  'producers_users',
  'project_gallery_images',
  'project_gender',
  'project_members',
  'project_social_links',
  // Nivel 3
  'events_gender',
  'events_project',
];

async function seedAll() {
  const client = await pool.connect();
  try {
    console.log(`📂 Leyendo seeds desde: ${SEED_DIR}\n`);

    const available = SEED_ORDER.filter(table => {
      const file = path.join(SEED_DIR, `${table}.sql`);
      return fs.existsSync(file);
    });

    if (available.length === 0) {
      console.log('⚠️  No se encontraron archivos .sql en la carpeta seed.');
      return;
    }

    console.log(`📋 Seeds a ejecutar (${available.length}):`);
    available.forEach(t => console.log(`   - ${t}.sql`));
    console.log('');

    for (const table of available) {
      const file = path.join(SEED_DIR, `${table}.sql`);
      const sql = fs.readFileSync(file, 'utf8');
      await client.query(sql);
      console.log(`✅ ${table}`);
    }

    console.log('\n🎉 Seed completado.');
  } catch (error) {
    console.error('\n❌ Error en seed:', error.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

if (require.main === module) {
  seedAll();
}

module.exports = { seedAll };
