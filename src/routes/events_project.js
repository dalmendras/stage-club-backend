const express = require('express');
const router = express.Router(); 
const eventsProjectController = require('../controllers/events_project');
// const auth = require('../middleware/auth');

router.get('/:id', auth, eventsProjectController.getById );
router.post('/', auth, eventsProjectController.create );
router.put('/:id', auth, eventsProjectController.update );

module.exports = router;
