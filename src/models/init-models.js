var DataTypes = require("sequelize").DataTypes;
var _artist_profiles = require("./artist_profiles");
var _artists = require("./artists");
var _company = require("./company");
var _company_users = require("./company_users");
var _country = require("./country");
var _events = require("./events");
var _events_gender = require("./events_gender");
var _events_project = require("./events_project");
var _ma_artist_type = require("./ma_artist_type");
var _ma_commune = require("./ma_commune");
var _ma_genders = require("./ma_genders");
var _ma_instrument = require("./ma_instrument");
var _ma_province = require("./ma_province");
var _ma_region = require("./ma_region");
var _ma_venue = require("./ma_venue");
var _ma_venue_space = require("./ma_venue_space");
var _ma_venue_types = require("./ma_venue_types");
var _musical_projects = require("./musical_projects");
var _producers = require("./producers");
var _producers_users = require("./producers_users");
var _project_gallery_images = require("./project_gallery_images");
var _project_gender = require("./project_gender");
var _project_members = require("./project_members");
var _project_social_links = require("./project_social_links");
var _social_platforms = require("./social_platforms");
var _users = require("./users");
var _venues = require("./venues");

function initModels(sequelize) {
  var artist_profiles = _artist_profiles(sequelize, DataTypes);
  var artists = _artists(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var company_users = _company_users(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var events_gender = _events_gender(sequelize, DataTypes);
  var events_project = _events_project(sequelize, DataTypes);
  var ma_artist_type = _ma_artist_type(sequelize, DataTypes);
  var ma_commune = _ma_commune(sequelize, DataTypes);
  var ma_genders = _ma_genders(sequelize, DataTypes);
  var ma_instrument = _ma_instrument(sequelize, DataTypes);
  var ma_province = _ma_province(sequelize, DataTypes);
  var ma_region = _ma_region(sequelize, DataTypes);
  var ma_venue = _ma_venue(sequelize, DataTypes);
  var ma_venue_space = _ma_venue_space(sequelize, DataTypes);
  var ma_venue_types = _ma_venue_types(sequelize, DataTypes);
  var musical_projects = _musical_projects(sequelize, DataTypes);
  var producers = _producers(sequelize, DataTypes);
  var producers_users = _producers_users(sequelize, DataTypes);
  var project_gallery_images = _project_gallery_images(sequelize, DataTypes);
  var project_gender = _project_gender(sequelize, DataTypes);
  var project_members = _project_members(sequelize, DataTypes);
  var project_social_links = _project_social_links(sequelize, DataTypes);
  var social_platforms = _social_platforms(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var venues = _venues(sequelize, DataTypes);

  project_members.belongsTo(artist_profiles, { as: "ap", foreignKey: "ap_id"});
  artist_profiles.hasMany(project_members, { as: "project_members", foreignKey: "ap_id"});
  company_users.belongsTo(company, { as: "co", foreignKey: "co_id"});
  company.hasMany(company_users, { as: "company_users", foreignKey: "co_id"});
  venues.belongsTo(company, { as: "co", foreignKey: "co_id"});
  company.hasMany(venues, { as: "venues", foreignKey: "co_id"});
  artist_profiles.belongsTo(country, { as: "c", foreignKey: "c_id"});
  country.hasMany(artist_profiles, { as: "artist_profiles", foreignKey: "c_id"});
  events_gender.belongsTo(events, { as: "ev", foreignKey: "ev_id"});
  events.hasMany(events_gender, { as: "events_genders", foreignKey: "ev_id"});
  events_project.belongsTo(events, { as: "ev", foreignKey: "ev_id"});
  events.hasMany(events_project, { as: "events_projects", foreignKey: "ev_id"});
  events.belongsTo(ma_artist_type, { as: "art", foreignKey: "art_id"});
  ma_artist_type.hasMany(events, { as: "events", foreignKey: "art_id"});
  musical_projects.belongsTo(ma_artist_type, { as: "art", foreignKey: "art_id"});
  ma_artist_type.hasMany(musical_projects, { as: "musical_projects", foreignKey: "art_id"});
  artist_profiles.belongsTo(ma_commune, { as: "com", foreignKey: "com_id"});
  ma_commune.hasMany(artist_profiles, { as: "artist_profiles", foreignKey: "com_id"});
  musical_projects.belongsTo(ma_commune, { as: "com", foreignKey: "com_id"});
  ma_commune.hasMany(musical_projects, { as: "musical_projects", foreignKey: "com_id"});
  producers.belongsTo(ma_commune, { as: "com", foreignKey: "com_id"});
  ma_commune.hasMany(producers, { as: "producers", foreignKey: "com_id"});
  venues.belongsTo(ma_commune, { as: "com", foreignKey: "com_id"});
  ma_commune.hasMany(venues, { as: "venues", foreignKey: "com_id"});
  project_gender.belongsTo(ma_genders, { as: "gdr", foreignKey: "gdr_id"});
  ma_genders.hasMany(project_gender, { as: "project_genders", foreignKey: "gdr_id"});
  artist_profiles.belongsTo(ma_instrument, { as: "inst", foreignKey: "inst_id"});
  ma_instrument.hasMany(artist_profiles, { as: "artist_profiles", foreignKey: "inst_id"});
  musical_projects.belongsTo(ma_region, { as: "reg", foreignKey: "reg_id"});
  ma_region.hasMany(musical_projects, { as: "musical_projects", foreignKey: "reg_id"});
  producers.belongsTo(ma_region, { as: "reg", foreignKey: "reg_id"});
  ma_region.hasMany(producers, { as: "producers", foreignKey: "reg_id"});
  venues.belongsTo(ma_region, { as: "reg", foreignKey: "reg_id"});
  ma_region.hasMany(venues, { as: "venues", foreignKey: "reg_id"});
  venues.belongsTo(ma_venue, { as: "ven", foreignKey: "ven_id"});
  ma_venue.hasMany(venues, { as: "venues", foreignKey: "ven_id"});
  venues.belongsTo(ma_venue_space, { as: "ve", foreignKey: "ves_id"});
  ma_venue_space.hasMany(venues, { as: "venues", foreignKey: "ves_id"});
  events_project.belongsTo(musical_projects, { as: "mp", foreignKey: "mp_id"});
  musical_projects.hasMany(events_project, { as: "events_projects", foreignKey: "mp_id"});
  project_gallery_images.belongsTo(musical_projects, { as: "mp", foreignKey: "mp_id"});
  musical_projects.hasMany(project_gallery_images, { as: "project_gallery_images", foreignKey: "mp_id"});
  project_gender.belongsTo(musical_projects, { as: "mp", foreignKey: "mp_id"});
  musical_projects.hasMany(project_gender, { as: "project_genders", foreignKey: "mp_id"});
  project_members.belongsTo(musical_projects, { as: "mp", foreignKey: "mp_id"});
  musical_projects.hasMany(project_members, { as: "project_members", foreignKey: "mp_id"});
  producers_users.belongsTo(producers, { as: "pro", foreignKey: "pro_id"});
  producers.hasMany(producers_users, { as: "producers_users", foreignKey: "pro_id"});
  company_users.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(company_users, { as: "company_users", foreignKey: "user_id"});
  producers_users.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(producers_users, { as: "producers_users", foreignKey: "user_id"});
  events.belongsTo(venues, { as: "ve", foreignKey: "ve_id"});
  venues.hasMany(events, { as: "events", foreignKey: "ve_id"});

  return {
    artist_profiles,
    artists,
    company,
    company_users,
    country,
    events,
    events_gender,
    events_project,
    ma_artist_type,
    ma_commune,
    ma_genders,
    ma_instrument,
    ma_province,
    ma_region,
    ma_venue,
    ma_venue_space,
    ma_venue_types,
    musical_projects,
    producers,
    producers_users,
    project_gallery_images,
    project_gender,
    project_members,
    project_social_links,
    social_platforms,
    users,
    venues,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
