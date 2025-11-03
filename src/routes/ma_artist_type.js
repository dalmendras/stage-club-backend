const express = require('express');
const router = express.Router(); 
const maArtistTypeController = require('../controllers/ma_artist_type');
// const auth = require('../middleware/auth');

router.get('/:id', maArtistTypeController.getById );
router.post('/', maArtistTypeController.create );
router.put('/:id', maArtistTypeController.update );

module.exports = router;
