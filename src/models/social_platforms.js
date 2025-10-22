const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('social_platforms', {
    sp_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    sp_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "social_platforms_sp_code_key"
    },
    sp_display_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sp_version: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ts_crea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ts_mod: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'social_platforms',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "social_platforms_pkey",
        unique: true,
        fields: [
          { name: "sp_id" },
        ]
      },
      {
        name: "social_platforms_sp_code_key",
        unique: true,
        fields: [
          { name: "sp_code" },
        ]
      },
    ]
  });
};
