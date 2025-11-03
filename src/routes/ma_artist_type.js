const express = require('express');
const router = express.Router(); 
const maArtistTypeController = require('../controllers/ma_artist_type');
// const auth = require('../middleware/auth');

router.get('/:id', auth, maArtistTypeController.getById );
router.post('/', auth, maArtistTypeController.create );
router.put('/:id', auth, maArtistTypeController.update );

module.exports = router;
