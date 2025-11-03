const express = require('express');
const router = express.Router(); 
const maProvinceController = require('../controllers/ma_province');
// const auth = require('../middleware/auth');

router.get('/:id', maProvinceController.getById );
router.post('/', maProvinceController.create );
router.put('/:id', maProvinceController.update );

module.exports = router;
