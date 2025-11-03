const express = require('express');
const router = express.Router(); 
const maRegionController = require('../controllers/ma_region');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maRegionController.getById );
router.post('/', auth, maRegionController.create );
router.put('/:id', auth, maRegionController.update );

module.exports = router;
