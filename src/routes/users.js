const express = require('express');
const router = express.Router(); 
const usersController = require('../controllers/users');
// const auth = require('../middleware/auth');

router.get('/:id', auth, usersController.getById );
router.post('/', auth, usersController.create );
router.put('/:id', auth, usersController.update );

module.exports = router;
