const { users, posts, comments, employees } = require('../models');

// =============================================================================
// EJEMPLOS DE CONSULTAS CON SEQUELIZE
// =============================================================================

class UserService {
  
  // 1. OBTENER TODOS LOS USUARIOS
  static async getAllUsers() {
    try {
      const allUsers = await users.findAll();
      console.log('📋 Todos los usuarios:', allUsers.length);
      return allUsers;
    } catch (error) {
      console.error('❌ Error al obtener usuarios:', error);
      throw error;
    }
  }

  // 2. OBTENER USUARIO POR ID
  static async getUserById(userId) {
    try {
      const user = await users.findByPk(userId);
      if (!user) {
        console.log('❌ Usuario no encontrado');
        return null;
      }
      console.log('✅ Usuario encontrado:', user.username);
      return user;
    } catch (error) {
      console.error('❌ Error al obtener usuario:', error);
      throw error;
    }
  }

  // 3. CREAR NUEVO USUARIO
  static async createUser(userData) {
    try {
      const newUser = await users.create(userData);
      console.log('✅ Usuario creado:', newUser.username);
      return newUser;
    } catch (error) {
      console.error('❌ Error al crear usuario:', error);
      throw error;
    }
  }

  // 4. ACTUALIZAR USUARIO
  static async updateUser(userId, updateData) {
    try {
      const [updatedRowsCount] = await users.update(updateData, {
        where: { id: userId }
      });
      
      if (updatedRowsCount === 0) {
        console.log('❌ Usuario no encontrado para actualizar');
        return null;
      }
      
      const updatedUser = await users.findByPk(userId);
      console.log('✅ Usuario actualizado:', updatedUser.username);
      return updatedUser;
    } catch (error) {
      console.error('❌ Error al actualizar usuario:', error);
      throw error;
    }
  }

  // 5. ELIMINAR USUARIO
  static async deleteUser(userId) {
    try {
      const deletedRowsCount = await users.destroy({
        where: { id: userId }
      });
      
      if (deletedRowsCount === 0) {
        console.log('❌ Usuario no encontrado para eliminar');
        return false;
      }
      
      console.log('✅ Usuario eliminado correctamente');
      return true;
    } catch (error) {
      console.error('❌ Error al eliminar usuario:', error);
      throw error;
    }
  }

  // 6. BUSCAR USUARIOS CON FILTROS
  static async findUsers(filters) {
    try {
      const foundUsers = await users.findAll({
        where: filters,
        order: [['id', 'ASC']]
      });
      console.log(`📋 Usuarios encontrados: ${foundUsers.length}`);
      return foundUsers;
    } catch (error) {
      console.error('❌ Error al buscar usuarios:', error);
      throw error;
    }
  }

  // 7. OBTENER USUARIOS CON PAGINACIÓN
  static async getUsersPaginated(page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      
      const { count, rows } = await users.findAndCountAll({
        limit: limit,
        offset: offset,
        order: [['id', 'ASC']]
      });
      
      console.log(`📋 Página ${page}: ${rows.length} usuarios de ${count} total`);
      
      return {
        users: rows,
        totalUsers: count,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        hasNextPage: page < Math.ceil(count / limit),
        hasPrevPage: page > 1
      };
    } catch (error) {
      console.error('❌ Error al obtener usuarios paginados:', error);
      throw error;
    }
  }

  // 8. OBTENER USUARIO CON SUS POSTS (RELACIÓN)
  static async getUserWithPosts(userId) {
    try {
      const user = await users.findByPk(userId, {
        include: [{
          model: posts,
          as: 'posts' // Usar el alias definido en las relaciones
        }]
      });
      
      if (!user) {
        console.log('❌ Usuario no encontrado');
        return null;
      }
      
      console.log(`✅ Usuario ${user.username} tiene ${user.posts.length} posts`);
      return user;
    } catch (error) {
      console.error('❌ Error al obtener usuario con posts:', error);
      throw error;
    }
  }
}

// =============================================================================
// EJEMPLOS DE USO
// =============================================================================

async function ejemplosDeUso() {
  try {
    console.log('🚀 Iniciando ejemplos de uso...\n');

    // 1. Obtener todos los usuarios
    console.log('1️⃣ Obteniendo todos los usuarios:');
    const todosUsuarios = await UserService.getAllUsers();
    console.log('');

    // 2. Obtener usuario por ID
    console.log('2️⃣ Obteniendo usuario por ID:');
    const usuario = await UserService.getUserById(1);
    console.log('');

    // 3. Crear nuevo usuario
    console.log('3️⃣ Creando nuevo usuario:');
    const nuevoUsuario = await UserService.createUser({
      username: 'nuevo_usuario_' + Date.now(),
      password: 'password123'
    });
    console.log('');

    // 4. Buscar usuarios con filtros
    console.log('4️⃣ Buscando usuarios que contengan "admin":');
    const usuariosAdmin = await UserService.findUsers({
      username: {
        [require('sequelize').Op.like]: '%admin%'
      }
    });
    console.log('');

    // 5. Obtener usuarios con paginación
    console.log('5️⃣ Obteniendo usuarios con paginación:');
    const usuariosPaginados = await UserService.getUsersPaginated(1, 5);
    console.log('');

    // 6. Obtener usuario con sus posts
    console.log('6️⃣ Obteniendo usuario con sus posts:');
    const usuarioConPosts = await UserService.getUserWithPosts(1);
    console.log('');

  } catch (error) {
    console.error('❌ Error en los ejemplos:', error);
  }
}

module.exports = {
  UserService,
  ejemplosDeUso
};
