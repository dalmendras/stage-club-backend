const { sequelize } = require('../config/database');
const initModels = require('./init-models');

// Inicializar todos los modelos
const models = initModels(sequelize);

// Exportar sequelize y todos los modelos
module.exports = {
  sequelize,
  ...models
};
