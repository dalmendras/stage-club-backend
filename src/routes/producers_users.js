const express = require('express');
const router = express.Router(); 
const producersUsersController = require('../controllers/producers_users');
// const auth = require('../middleware/auth');

router.get('/:id', auth, producersUsersController.getById );
router.post('/', auth, producersUsersController.create );
router.put('/:id', auth, producersUsersController.update );

module.exports = router;
