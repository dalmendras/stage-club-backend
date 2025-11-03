const express = require('express');
const router = express.Router(); 
const maGendersController = require('../controllers/ma_genders');
// const auth = require('../middleware/auth');

router.get('/:id', maGendersController.getById );
router.post('/', maGendersController.create );
router.put('/:id', maGendersController.update );

module.exports = router;
