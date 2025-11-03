const express = require('express');
const router = express.Router(); 
const maInstrumentController = require('../controllers/ma_instrument');
// const auth = require('../middleware/auth');

router.get('/:id', maInstrumentController.getById );
router.post('/', maInstrumentController.create );
router.put('/:id', maInstrumentController.update );

module.exports = router;
