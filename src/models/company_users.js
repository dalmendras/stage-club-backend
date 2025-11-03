const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('company_users', {
    cou_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'co_id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    cou_version: {
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
    tableName: 'company_users',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope
  });
};
