const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('producers_users', {
    pru_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'producers',
        key: 'pro_id'
      },
      unique: "producers_users_pro_id_user_id_key"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      },
      unique: "producers_users_pro_id_user_id_key"
    },
    pru_version: {
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
    tableName: 'producers_users',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "producers_users_pkey",
        unique: true,
        fields: [
          { name: "pru_id" },
        ]
      },
      {
        name: "producers_users_pro_id_user_id_key",
        unique: true,
        fields: [
          { name: "pro_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
