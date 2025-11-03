const express = require('express');
const router = express.Router(); 
const companyController = require('../controllers/company');
// const auth = require('../middleware/auth');

router.get('/:id', auth, companyController.getById );
router.post('/', auth, companyController.create );
router.put('/:id', auth, companyController.update );

module.exports = router;
