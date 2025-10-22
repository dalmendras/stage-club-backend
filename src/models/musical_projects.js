const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('musical_projects', {
    mp_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mp_project_name: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    art_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'ma_artist_type',
        key: 'art_id'
      }
    },
    mp_active_since: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mp_desciption: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    mp_bio: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    mp_avatar_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    mp_main_image_url: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    mp_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mp_email_band: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    reg_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'ma_region',
        key: 'reg_id'
      }
    },
    com_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'ma_commune',
        key: 'com_id'
      }
    },
    mp_direccion: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    mp_telephone: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    mp_version: {
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
    tableName: 'musical_projects',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "musical_projects_pkey",
        unique: true,
        fields: [
          { name: "mp_id" },
        ]
      },
    ]
  });
};
