const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_genders', {
    gdr_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    gdr_type: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    gdr_description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gdr_version: {
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
    tableName: 'ma_genders',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "genders_pk",
        unique: true,
        fields: [
          { name: "gdr_id" },
        ]
      },
    ]
  });
};
