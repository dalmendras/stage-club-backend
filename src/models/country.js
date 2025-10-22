const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('country', {
    c_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    c_alpha_2: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    c_alpha_3: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    c_name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    c_img: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    c_version: {
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
    tableName: 'country',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "country_pkey",
        unique: true,
        fields: [
          { name: "c_id" },
        ]
      },
    ]
  });
};
