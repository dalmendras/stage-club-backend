const express = require('express');
const router = express.Router(); 
const projectSocialLinksController = require('../controllers/project_social_links');
// const auth = require('../middleware/auth');

router.get('/:id', auth, projectSocialLinksController.getById );
router.post('/', auth, projectSocialLinksController.create );
router.put('/:id', auth, projectSocialLinksController.update );

module.exports = router;
