const express = require('express');
const router = express.Router(); 
const maCommuneController = require('../controllers/ma_commune');
// const auth = require('../middleware/auth');

router.get('/:id', maCommuneController.getById );
router.get('/', maCommuneController.get );
router.put('/:id', maCommuneController.update );

module.exports = router;
