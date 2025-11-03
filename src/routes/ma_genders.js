const express = require('express');
const router = express.Router(); 
const maGendersController = require('../controllers/ma_genders');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maGendersController.getById );
router.post('/', auth, maGendersController.create );
router.put('/:id', auth, maGendersController.update );

module.exports = router;
