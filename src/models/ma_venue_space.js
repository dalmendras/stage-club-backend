const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_venue_space', {
    ves_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    ves_type: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    ves_description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ves_version: {
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
    tableName: 'ma_venue_space',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "venue_space_pk",
        unique: true,
        fields: [
          { name: "ves_id" },
        ]
      },
    ]
  });
};
