const express = require('express');
const router = express.Router(); 
const musicalProjectsController = require('../controllers/musical_projects');
// const auth = require('../middleware/auth');

router.get('/:id', auth, musicalProjectsController.getById );
router.post('/', auth, musicalProjectsController.create );
router.put('/:id', auth, musicalProjectsController.update );

module.exports = router;
