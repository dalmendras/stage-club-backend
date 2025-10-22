const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('events_project', {
    epr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ev_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'events',
        key: 'ev_id'
      },
      unique: "events_project_ev_id_mp_id_key"
    },
    mp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'musical_projects',
        key: 'mp_id'
      },
      unique: "events_project_ev_id_mp_id_key"
    },
    ev_userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ev_crea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ev_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mp_crea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    mp_mod: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mp_userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    epr_version: {
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
    tableName: 'events_project',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "events_project_ev_id_mp_id_key",
        unique: true,
        fields: [
          { name: "ev_id" },
          { name: "mp_id" },
        ]
      },
      {
        name: "events_project_pkey",
        unique: true,
        fields: [
          { name: "epr_id" },
        ]
      },
    ]
  });
};
