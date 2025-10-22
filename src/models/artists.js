const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('artists', {
    ar_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'artists',
    schema: 'public',
    timestamps: false
  });
};
