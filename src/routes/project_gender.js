const express = require('express');
const router = express.Router(); 
const projectGenderController = require('../controllers/project_gender');
// const auth = require('../middleware/auth');

router.get('/:id', auth, projectGenderController.getById );
router.post('/', auth, projectGenderController.create );
router.put('/:id', auth, projectGenderController.update );

module.exports = router;
