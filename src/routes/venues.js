const express = require('express');
const router = express.Router(); 
const venuesController = require('../controllers/venues');
// const auth = require('../middleware/auth');

router.get('/:id', auth, venuesController.getById );
router.post('/', auth, venuesController.create );
router.put('/:id', auth, venuesController.update );

module.exports = router;
