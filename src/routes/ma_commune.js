const express = require('express');
const router = express.Router(); 
const maCommuneController = require('../controllers/ma_commune');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maCommuneController.getById );
router.post('/', auth, maCommuneController.create );
router.put('/:id', auth, maCommuneController.update );

module.exports = router;
