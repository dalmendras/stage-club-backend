const express = require('express');
const router = express.Router(); 
const projectSocialPlatformsController = require('../controllers/social_platforms');
// const auth = require('../middleware/auth');

router.get('/:id', projectSocialPlatformsController.getById );
router.post('/', projectSocialPlatformsController.create );
router.put('/:id', projectSocialPlatformsController.update );

module.exports = router;
