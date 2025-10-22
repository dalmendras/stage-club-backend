const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_region', {
    reg_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    reg_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reg_abbre: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    reg_cut_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    reg_version: {
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
    tableName: 'ma_region',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "region_pkey",
        unique: true,
        fields: [
          { name: "reg_id" },
        ]
      },
    ]
  });
};
