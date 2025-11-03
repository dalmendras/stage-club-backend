const express = require('express');
const router = express.Router(); 
const eventsController = require('../controllers/events');
// const auth = require('../middleware/auth');

router.get('/:id', auth, eventsController.getById );
router.post('/', auth, eventsController.create );
router.put('/:id', auth, eventsController.update );

module.exports = router;
