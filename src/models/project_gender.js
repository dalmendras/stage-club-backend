const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('project_gender', {
    pg_id: {
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
      }
    },
    gdr_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'ma_genders',
        key: 'gdr_id'
      }
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
    tableName: 'project_gender',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "project_gender_pkey",
        unique: true,
        fields: [
          { name: "pg_id" },
        ]
      },
    ]
  });
};
