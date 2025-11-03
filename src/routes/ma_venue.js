const express = require('express');
const router = express.Router(); 
const maVenueController = require('../controllers/ma_venue');
// const auth = require('../middleware/auth');

router.get('/:id', maVenueController.getById );
router.post('/', maVenueController.create );
router.put('/:id', maVenueController.update );

module.exports = router;
