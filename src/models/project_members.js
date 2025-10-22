const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('project_members', {
    pm_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mp_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'musical_projects',
        key: 'mp_id'
      },
      unique: "project_members_mp_id_ap_id_key"
    },
    ap_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'artist_profiles',
        key: 'ap_id'
      },
      unique: "project_members_mp_id_ap_id_key"
    },
    pm_is_leader: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    pm_join_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    pm_state: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    pg_version: {
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
    tableName: 'project_members',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "project_members_mp_id_ap_id_key",
        unique: true,
        fields: [
          { name: "mp_id" },
          { name: "ap_id" },
        ]
      },
      {
        name: "project_members_pkey",
        unique: true,
        fields: [
          { name: "pm_id" },
        ]
      },
    ]
  });
};
