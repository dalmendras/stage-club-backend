const express = require('express');
const router = express.Router(); 
const projectGalleryImagesController = require('../controllers/project_gallery_images');
// const auth = require('../middleware/auth');

router.get('/:id', projectGalleryImagesController.getById );
router.post('/', projectGalleryImagesController.create );
router.put('/:id', projectGalleryImagesController.update );

module.exports = router;
