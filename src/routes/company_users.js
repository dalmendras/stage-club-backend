const express = require('express');
const router = express.Router(); 
const companyUsersController = require('../controllers/company_users');
// const auth = require('../middleware/auth');

router.get('/:id', companyUsersController.getById );
router.post('/', companyUsersController.create );
router.put('/:id', companyUsersController.update );

module.exports = router;
