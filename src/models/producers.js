const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('producers', {
    pro_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pro_rut: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: "producers_pro_rut_key"
    },
    pro_legal_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pro_commercial_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_region',
        key: 'reg_id'
      }
    },
    com_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_commune',
        key: 'com_id'
      }
    },
    pro_address: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    pro_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pro_telephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pro_website: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_logo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_youtube_url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_instagram_url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_tiktok_url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_facebook_url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pro_version: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    pro_user_crea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pro_user_mod: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'producers',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "producers_pkey",
        unique: true,
        fields: [
          { name: "pro_id" },
        ]
      },
      {
        name: "producers_pro_rut_key",
        unique: true,
        fields: [
          { name: "pro_rut" },
        ]
      },
    ]
  });
};
