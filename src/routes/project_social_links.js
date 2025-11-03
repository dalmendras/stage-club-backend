const express = require('express');
const router = express.Router(); 
const projectSocialLinksController = require('../controllers/project_social_links');
// const auth = require('../middleware/auth');

router.get('/:id', projectSocialLinksController.getById );
router.post('/', projectSocialLinksController.create );
router.put('/:id', projectSocialLinksController.update );

module.exports = router;
