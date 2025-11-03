const express = require('express');
const router = express.Router(); 
const projectGenderController = require('../controllers/project_gender');
// const auth = require('../middleware/auth');

router.get('/:id', projectGenderController.getById );
router.post('/', projectGenderController.create );
router.put('/:id', projectGenderController.update );

module.exports = router;
