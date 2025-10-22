const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_instrument', {
    inst_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    inst_name: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    inst_category: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    inst_description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    inst_version: {
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
    tableName: 'ma_instrument',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "instruments_pk",
        unique: true,
        fields: [
          { name: "inst_id" },
        ]
      },
    ]
  });
};
