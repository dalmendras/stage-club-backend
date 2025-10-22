const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('artist_profiles', {
    ap_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ap_first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ap_last_name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "artist_profiles_ap_id_user_key"
    },
    ap_profession: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    inst_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_instrument',
        key: 'inst_id'
      }
    },
    ap_birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    c_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'country',
        key: 'c_id'
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
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ap_biography: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    ap_version: {
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
    tableName: 'artist_profiles',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "artist_profiles_ap_id_user_key",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "artist_profiles_pkey",
        unique: true,
        fields: [
          { name: "ap_id" },
        ]
      },
    ]
  });
};
