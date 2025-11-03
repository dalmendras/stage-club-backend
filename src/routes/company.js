const express = require('express');
const router = express.Router(); 
const companyController = require('../controllers/company');
// const auth = require('../middleware/auth');

router.get('/:id', companyController.getById );
router.post('/', companyController.create );
router.put('/:id', companyController.update );

module.exports = router;
