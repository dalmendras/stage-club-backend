const express = require('express');
const router = express.Router(); 
const maVenueController = require('../controllers/ma_venue');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maVenueController.getById );
router.post('/', auth, maVenueController.create );
router.put('/:id', auth, maVenueController.update );

module.exports = router;
