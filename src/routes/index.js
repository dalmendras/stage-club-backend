const express = require('express'); 

const artistProfileRouter = require('./artist_profiles');
const companyUsersRouter = require('./company_users');
const companyRouter = require('./company');
const countryRouter = require('./country');
const eventsGenderRouter = require('./events_gender');
const eventsProjectRouter = require('./events_project');
const eventsRouter = require('./events');
const maArtistTypeRouter = require('./ma_artist_type');
const maCommuneRouter = require('./ma_commune');
const maGendersRouter = require('./ma_genders');
const maInstrumentRouter = require('./ma_instrument');
const maProvinceRouter = require('./ma_province');
const maRegionRouter = require('./ma_region');
const maVenueSpaceRouter = require('./ma_venue_space');
const maVenueTypesRouter = require('./ma_venue_types');
const maVenueRouter = require('./ma_venue');
const musicalProjectsRouter = require('./musical_projects');
const producersUsersRouter = require('./producers_users');
const producersRouter = require('./producers');
const projectGalleryImagesRouter = require('./project_gallery_images');
const projectGenderRouter = require('./project_gender');
const projectMembersRouter = require('./project_members');
const projectSocialLinksRouter = require('./project_social_links');
const socialPlatformsRouter = require('./social_platforms');
const usersRouter = require('./users');
const venuesRouter = require('./venues');


function routerApi(app) {
    const router = express.Router();

    // Base path
    app.use('/api/v1', router);

    // Tables
    router.use('/artistprofile', artistProfileRouter);
    router.use('/companyusers', companyUsersRouter);
    router.use('/company', companyRouter);
    router.use('/country', countryRouter);
    router.use('/eventsgender', eventsGenderRouter);
    router.use('/eventsproject', eventsProjectRouter);
    router.use('/events', eventsRouter);
    router.use('/maartisttype', maArtistTypeRouter);
    router.use('/macommune', maCommuneRouter);
    router.use('/magenders', maGendersRouter);
    router.use('/mainstrument', maInstrumentRouter);
    router.use('/maprovince', maProvinceRouter);
    router.use('/maregion', maRegionRouter);
    router.use('/mavenuespace', maVenueSpaceRouter);
    router.use('/mavenuetypes', maVenueTypesRouter);
    router.use('/mavenue', maVenueRouter);
    router.use('/musicalprojects', musicalProjectsRouter);
    router.use('/producersusers', producersUsersRouter);
    router.use('/producers', producersRouter);
    router.use('/projectgalleryimages', projectGalleryImagesRouter);
    router.use('/projectgender', projectGenderRouter);
    router.use('/projectmembers', projectMembersRouter);
    router.use('/projectsociallinks', projectSocialLinksRouter);
    router.use('/socialplatforms', socialPlatformsRouter);
    router.use('/users', usersRouter);
    router.use('/venues', venuesRouter);

//  // Images
//  router.use('/images', imagesRouter);
//
//  // Singin - Singup
//  router.use('/auth', authRouter);
//
//  // Error 404
//  router.use('/brandcars', brandCarsRouter);
}

module.exports = routerApi;