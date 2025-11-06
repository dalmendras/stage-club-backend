const express = require('express');
require('dotenv').config();

const { testConnection } = require('./config/database');
const { ejemplosDeUso } = require('./services/userService');
const userRoutes = require('./routes/userRoutes');
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// // Rutas
// app.use('/api/users', userRoutes);
// 
// // Ruta de prueba
// app.get('/', (req, res) => {
//   res.json({
//     message: '🚀 API Stage Club Backend funcionando!',
//     endpoints: {
//       users: '/api/users',
//       posts: '/api/posts',
//       examples: '/api/examples'
//     }
//   });
// });

// Api route
routerApi(app);

// Ruta para ejecutar ejemplos de Sequelize
// app.get('/api/examples', async (req, res) => {
//   try {
//     console.log('🔄 Ejecutando ejemplos de Sequelize...');
//     await ejemplosDeUso();
//     res.json({ 
//       message: '✅ Ejemplos ejecutados correctamente. Revisa la consola.',
//       note: 'Los resultados se muestran en la consola del servidor'
//     });
//   } catch (error) {
//     console.error('❌ Error ejecutando ejemplos:', error);
//     res.status(500).json({ 
//       error: 'Error ejecutando ejemplos',
//       details: error.message 
//     });
//   }
// });
// 
// // Inicializar servidor
// async function startServer() {
//   try {
//     // Probar conexión a la base de datos
//     await testConnection();
//     
//     // Iniciar servidor
//     app.listen(PORT, () => {
//       console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
//       console.log('📋 Endpoints disponibles:');
//       console.log('   GET  / - Información de la API');
//       console.log('   GET  /api/examples - Ejecutar ejemplos de Sequelize');
//       console.log('   GET  /api/users - Obtener todos los usuarios');
//       console.log('   POST /api/users - Crear usuario');
//       console.log('   GET  /api/users/:id - Obtener usuario por ID');
//       console.log('   PUT  /api/users/:id - Actualizar usuario');
//       console.log('   DELETE /api/users/:id - Eliminar usuario');
//     });
//   } catch (error) {
//     console.error('❌ Error iniciando servidor:', error);
//     process.exit(1);
//   }
// }

// startServer();

// Test home route
app.get('/', (req,res) => {
    res.send('Backend Mi Taller');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});