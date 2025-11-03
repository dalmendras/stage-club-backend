const express = require('express');
const router = express.Router(); 
const projectGalleryImagesController = require('../controllers/project_gallery_images');
// const auth = require('../middleware/auth');

router.get('/:id', auth, projectGalleryImagesController.getById );
router.post('/', auth, projectGalleryImagesController.create );
router.put('/:id', auth, projectGalleryImagesController.update );

module.exports = router;
