const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('company', {
    co_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: "company_co_name_key"
    },
    co_logo_url: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    co_description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    co_website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    co_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    co_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    co_youtube: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    co_instagram: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    co_tiktok: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    co_facebook: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    co_version: {
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
    tableName: 'company',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "company_co_name_key",
        unique: true,
        fields: [
          { name: "co_name" },
        ]
      },
      {
        name: "company_pkey",
        unique: true,
        fields: [
          { name: "co_id" },
        ]
      },
    ]
  });
};
