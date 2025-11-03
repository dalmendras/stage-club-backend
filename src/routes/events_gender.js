const express = require('express');
const router = express.Router(); 
const eventsGenderController = require('../controllers/events_gender');
// const auth = require('../middleware/auth');

router.get('/:id', auth, eventsGenderController.getById );
router.post('/', auth, eventsGenderController.create );
router.put('/:id', auth, eventsGenderController.update );

module.exports = router;
