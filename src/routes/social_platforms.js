const express = require('express');
const router = express.Router(); 
const projectSocialPlatformsController = require('../controllers/social_platforms');
// const auth = require('../middleware/auth');

router.get('/:id', auth, projectSocialPlatformsController.getById );
router.post('/', auth, projectSocialPlatformsController.create );
router.put('/:id', auth, projectSocialPlatformsController.update );

module.exports = router;
