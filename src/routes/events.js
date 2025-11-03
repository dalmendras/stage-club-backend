const express = require('express');
const router = express.Router(); 
const eventsController = require('../controllers/events');
// const auth = require('../middleware/auth');

router.get('/:id', eventsController.getById );
router.post('/', eventsController.create );
router.put('/:id', eventsController.update );

module.exports = router;
