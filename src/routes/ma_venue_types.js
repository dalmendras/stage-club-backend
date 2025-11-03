const express = require('express');
const router = express.Router(); 
const maVenueTypesController = require('../controllers/ma_venue_types');
// const auth = require('../middleware/auth');

router.get('/:id', maVenueTypesController.getById );
router.post('/', maVenueTypesController.create );
router.put('/:id', maVenueTypesController.update );

module.exports = router;
