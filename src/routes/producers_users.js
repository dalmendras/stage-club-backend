const express = require('express');
const router = express.Router(); 
const producersUsersController = require('../controllers/producers_users');
// const auth = require('../middleware/auth');

router.get('/:id', producersUsersController.getById );
router.post('/', producersUsersController.create );
router.put('/:id', producersUsersController.update );

module.exports = router;
