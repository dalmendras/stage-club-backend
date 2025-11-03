const express = require('express');
const router = express.Router(); 
const producersController = require('../controllers/producers');
// const auth = require('../middleware/auth');

router.get('/:id', auth, producersController.getById );
router.post('/', auth, producersController.create );
router.put('/:id', auth, producersController.update );

module.exports = router;
