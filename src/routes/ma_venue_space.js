const express = require('express');
const router = express.Router(); 
const maVenueSpaceController = require('../controllers/ma_venue_space');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maVenueSpaceController.getById );
router.post('/', auth, maVenueSpaceController.create );
router.put('/:id', auth, maVenueSpaceController.update );

module.exports = router;
