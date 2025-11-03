const express = require('express');
const router = express.Router(); 
const countryController = require('../controllers/country');
// const auth = require('../middleware/auth');

router.get('/:id', auth, countryController.getById );
router.post('/', auth, countryController.create );
router.put('/:id', auth, countryController.update );

module.exports = router;
