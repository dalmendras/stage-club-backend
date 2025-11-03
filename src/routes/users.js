const express = require('express');
const router = express.Router(); 
const usersController = require('../controllers/users');
// const auth = require('../middleware/auth');

router.get('/:id', usersController.getById );
router.post('/', usersController.create );
router.put('/:id', usersController.update );

module.exports = router;
