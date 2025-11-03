const express = require('express');
const router = express.Router(); 
const maProvinceController = require('../controllers/ma_province');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maProvinceController.getById );
router.post('/', auth, maProvinceController.create );
router.put('/:id', auth, maProvinceController.update );

module.exports = router;
