const express = require('express');
const router = express.Router(); 
const projectMembersController = require('../controllers/project_members');
// const auth = require('../middleware/auth');

router.get('/:id', projectMembersController.getById );
router.post('/', projectMembersController.create );
router.put('/:id', projectMembersController.update );

module.exports = router;
