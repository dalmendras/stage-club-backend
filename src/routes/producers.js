const express = require('express');
const router = express.Router(); 
const producersController = require('../controllers/producers');
// const auth = require('../middleware/auth');

router.get('/:id', producersController.getById );
router.post('/', producersController.create );
router.put('/:id', producersController.update );

module.exports = router;
