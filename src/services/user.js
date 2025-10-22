const { models } = require('../config/database');

class UsersService {

    constructor() {}

    async find() {
        const res = await models.users.findAll({
            where: {
                active: true
            },
            order: [['user_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.users.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.users.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = UsersService;