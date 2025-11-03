const express = require('express');
const router = express.Router(); 
const venuesController = require('../controllers/venues');
// const auth = require('../middleware/auth');

router.get('/:id', venuesController.getById );
router.post('/', venuesController.create );
router.put('/:id', venuesController.update );

module.exports = router;
