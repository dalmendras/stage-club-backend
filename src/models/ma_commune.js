const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_commune', {
    com_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    prv_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    com_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    com_cut_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    com_version: {
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
    tableName: 'ma_commune',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "commune_pkey",
        unique: true,
        fields: [
          { name: "com_id" },
        ]
      },
    ]
  });
};
