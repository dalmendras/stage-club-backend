const express = require('express');
const router = express.Router(); 
const maRegionController = require('../controllers/ma_region');
// const auth = require('../middleware/auth');

router.get('/:id', maRegionController.getById );
router.post('/', maRegionController.create );
router.put('/:id', maRegionController.update );

module.exports = router;
