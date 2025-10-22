const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('venues', {
    ve_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    co_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'co_id'
      }
    },
    ve_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ven_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_venue',
        key: 'ven_id'
      }
    },
    ves_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_venue_space',
        key: 'ves_id'
      }
    },
    ve_image: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    reg_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_region',
        key: 'reg_id'
      }
    },
    com_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_commune',
        key: 'com_id'
      }
    },
    ve_address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ve_services: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ve_dimensions: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ve_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ve_website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ve_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ve_telephone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ve_audio_specs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ve_lighting_specs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ve_stage_specs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ve_backline_specs: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ve_dressing_rooms: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ve_sound_technician: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ve_lighting_technician: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ve_version: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
    tableName: 'venues',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "venues_pkey",
        unique: true,
        fields: [
          { name: "ve_id" },
        ]
      },
    ]
  });
};
