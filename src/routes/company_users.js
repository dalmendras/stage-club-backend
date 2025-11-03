const express = require('express');
const router = express.Router(); 
const companyUsersController = require('../controllers/company_users');
// const auth = require('../middleware/auth');

router.get('/:id', auth, companyUsersController.getById );
router.post('/', auth, companyUsersController.create );
router.put('/:id', auth, companyUsersController.update );

module.exports = router;
