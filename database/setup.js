const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuración de la base de datos
const pool = new Pool({
  user: process.env.DB_USER || 'root',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'stage_club',
  password: process.env.DB_PASSWORD || 'david',
  port: process.env.DB_PORT || 5432,
});

async function createTables() {
  const client = await pool.connect();
  
  try {
    console.log('🚀 Iniciando creación de tablas...');
    
    // Leer el archivo SQL
    const sqlScript = fs.readFileSync(path.join(__dirname, 'create_tables.sql'), 'utf8');
    
    // Ejecutar el script
    await client.query(sqlScript);
    
    console.log('✅ Tablas creadas exitosamente');
    
    // Verificar que las tablas se crearon
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);
    
    console.log('📋 Tablas en la base de datos:');
    result.rows.forEach(row => {
      console.log(`  - ${row.table_name}`);
    });
    
  } catch (error) {
    console.error('❌ Error al crear las tablas:', error.message);
  } finally {
    client.release();
    await pool.end();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  createTables();
}

module.exports = { createTables };