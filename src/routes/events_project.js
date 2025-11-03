const express = require('express');
const router = express.Router(); 
const eventsProjectController = require('../controllers/events_project');
// const auth = require('../middleware/auth');

router.get('/:id', eventsProjectController.getById );
router.post('/', eventsProjectController.create );
router.put('/:id', eventsProjectController.update );

module.exports = router;
