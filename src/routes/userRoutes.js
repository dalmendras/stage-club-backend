const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// Rutas de usuarios
router.get('/', UserController.getAllUsers);           // GET /api/users
router.get('/search', UserController.searchUsers);     // GET /api/users/search
router.get('/:id', UserController.getUserById);        // GET /api/users/:id
router.post('/', UserController.createUser);           // POST /api/users
router.put('/:id', UserController.updateUser);         // PUT /api/users/:id
router.delete('/:id', UserController.deleteUser);      // DELETE /api/users/:id

module.exports = router;
