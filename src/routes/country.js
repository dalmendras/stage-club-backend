const express = require('express');
const router = express.Router(); 
const countryController = require('../controllers/country');
// const auth = require('../middleware/auth');

router.get('/:id', countryController.getById );
router.post('/', countryController.create );
router.put('/:id', countryController.update );

module.exports = router;
