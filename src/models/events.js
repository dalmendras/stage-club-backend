const Sequelize = require('sequelize');

const defaultScope = {
  attributes: { exclude: ['ts_crea','ts_mod','createdAt','updatedAt','ap_version'] }
};

module.exports = function(sequelize, DataTypes) {

  return sequelize.define('events', {
    ev_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ev_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    art_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'ma_artist_type',
        key: 'art_id'
      }
    },
    ev_instrument_performer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ev_event_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ev_start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ev_end_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ev_inscription_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ve_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'venues',
        key: 've_id'
      }
    },
    ev_max_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ev_requires_sound_check: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_has_dressing_room: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_includes_catering: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_includes_lighting_on_stage: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_has_sound_system: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_includes_sound_technician: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_offers_outbound_transport: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_offers_return_transport: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_has_security_personnel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ev_offered_net_compensation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ev_coordinator_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ev_additional_information: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ev_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Borrador"
    },
    ev_created_by_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ev_version: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    ts_crea: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    ts_modi: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'events',
    schema: 'public',
    timestamps: false,
    defaultScope: defaultScope,
    indexes: [
      {
        name: "events_pkey",
        unique: true,
        fields: [
          { name: "ev_id" },
        ]
      },
    ]
  });
};
