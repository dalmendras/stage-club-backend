const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('ma_venue', {
    ven_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    ven_class: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    ven_name: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    ven_description: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    ven_version: {
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
    tableName: 'ma_venue',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "venue_type_pk_1",
        unique: true,
        fields: [
          { name: "ven_id" },
        ]
      },
    ]
  });
};
