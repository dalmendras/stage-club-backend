const express = require('express');
const router = express.Router(); 
const projectMembersController = require('../controllers/project_members');
// const auth = require('../middleware/auth');

router.get('/:id', auth, projectMembersController.getById );
router.post('/', auth, projectMembersController.create );
router.put('/:id', auth, projectMembersController.update );

module.exports = router;
