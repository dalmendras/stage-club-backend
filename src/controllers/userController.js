const db = require('../config/database');

class UserController {
  // Obtener todos los usuarios
  static async getAllUsers(req, res) {
    try {
      const users = await db.users.findAll();
      res.json(users);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Buscar usuarios
  static async searchUsers(req, res) {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ error: 'Parámetro de búsqueda requerido' });
      }

      const users = await db.users.findAll({
        where: {
          [db.Sequelize.Op.or]: [
            { user_first_name: { [db.Sequelize.Op.iLike]: `%${q}%` } },
            { user_last_name: { [db.Sequelize.Op.iLike]: `%${q}%` } },
            { user_email: { [db.Sequelize.Op.iLike]: `%${q}%` } }
          ]
        }
      });

      res.json(users);
    } catch (error) {
      console.error('Error al buscar usuarios:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Obtener un usuario por ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await db.users.findByPk(id);
      
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Crear un nuevo usuario
  static async createUser(req, res) {
    try {
      const newUser = await db.users.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error al crear usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Actualizar un usuario
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await db.users.update(req.body, {
        where: { user_id: id }
      });

      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      const updatedUser = await db.users.findByPk(id);
      res.json(updatedUser);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }

  // Eliminar un usuario
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await db.users.destroy({
        where: { user_id: id }
      });

      if (deletedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.status(204).send();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

module.exports = UserController;