const express = require('express');
const router = express.Router(); 
const maVenueSpaceController = require('../controllers/ma_venue_space');
// const auth = require('../middleware/auth');

router.get('/:id', maVenueSpaceController.getById );
router.post('/', maVenueSpaceController.create );
router.put('/:id', maVenueSpaceController.update );

module.exports = router;
