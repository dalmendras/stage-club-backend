const express = require('express');
const router = express.Router(); 
const maVenueTypesController = require('../controllers/ma_venue_types');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maVenueTypesController.getById );
router.post('/', auth, maVenueTypesController.create );
router.put('/:id', auth, maVenueTypesController.update );

module.exports = router;
