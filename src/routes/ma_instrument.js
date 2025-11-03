const express = require('express');
const router = express.Router(); 
const maInstrumentController = require('../controllers/ma_instrument');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maInstrumentController.getById );
router.post('/', auth, maInstrumentController.create );
router.put('/:id', auth, maInstrumentController.update );

module.exports = router;
