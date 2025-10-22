const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_venue_types', {
    vet_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    vet_size: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    vet_type: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    vet_description: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    vet_version: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ts_crea: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ts_mod: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ma_venue_types',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "venue_type_pk",
        unique: true,
        fields: [
          { name: "vet_id" },
        ]
      },
    ]
  });
};
