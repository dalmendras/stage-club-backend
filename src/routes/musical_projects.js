const express = require('express');
const router = express.Router(); 
const musicalProjectsController = require('../controllers/musical_projects');
// const auth = require('../middleware/auth');

router.get('/:id', musicalProjectsController.getById );
router.post('/', musicalProjectsController.create );
router.put('/:id', musicalProjectsController.update );

module.exports = router;
