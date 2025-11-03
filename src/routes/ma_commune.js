const express = require('express');
const router = express.Router(); 
const maCommuneController = require('../controllers/ma_commune');
// const auth = require('../middleware/auth');

router.get('/:id', maCommuneController.getById );
router.post('/', maCommuneController.create );
router.put('/:id', maCommuneController.update );

module.exports = router;
