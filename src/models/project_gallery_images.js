const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('project_gallery_images', {
    pgi_id: {
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
    pgi_image_url: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    pgi_position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pgi_version: {
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
    tableName: 'project_gallery_images',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "project_gallery_images_pkey",
        unique: true,
        fields: [
          { name: "pgi_id" },
        ]
      },
    ]
  });
};
