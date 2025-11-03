const express = require('express');
const router = express.Router(); 
const eventsGenderController = require('../controllers/events_gender');
// const auth = require('../middleware/auth');

router.get('/:id', eventsGenderController.getById );
router.post('/', eventsGenderController.create );
router.put('/:id', eventsGenderController.update );

module.exports = router;
