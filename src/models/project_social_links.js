const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('project_social_links', {
    psl_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mp_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "project_social_links_mp_id_sp_id_key"
    },
    sp_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      unique: "project_social_links_mp_id_sp_id_key"
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    psl_version: {
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
    tableName: 'project_social_links',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "project_social_links_mp_id_sp_id_key",
        unique: true,
        fields: [
          { name: "mp_id" },
          { name: "sp_id" },
        ]
      },
      {
        name: "project_social_links_pkey",
        unique: true,
        fields: [
          { name: "psl_id" },
        ]
      },
    ]
  });
};
