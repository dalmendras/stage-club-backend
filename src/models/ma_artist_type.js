const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_artist_type', {
    art_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    art_type: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    art_description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    art_version: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ts_crea: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ts_mod: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ma_artist_type',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "artists_pk",
        unique: true,
        fields: [
          { name: "art_id" },
        ]
      },
    ]
  });
};
