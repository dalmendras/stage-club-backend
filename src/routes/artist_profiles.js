const express = require('express');
const router = express.Router(); 
const artistProfilesController = require('../controllers/artist_profiles');
// const auth = require('../middleware/auth');

// router.get('/:id', auth, artistProfilesController.getById );
// router.post('/', auth, artistProfilesController.create );
// router.put('/:id', auth, artistProfilesController.update );

router.get('/:id', artistProfilesController.getById );
router.post('/', artistProfilesController.create );
router.put('/:id', artistProfilesController.update );

module.exports = router;
