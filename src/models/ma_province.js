const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_province', {
    prv_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    reg_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    prv_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prv_cut_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    prv_version: {
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
    tableName: 'ma_province',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "province_pkey",
        unique: true,
        fields: [
          { name: "prv_id" },
        ]
      },
    ]
  });
};
