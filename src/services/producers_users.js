const { models } = require('../config/database');

class ProducersUsersService {

    constructor() {}

    async find() {
        const res = await models.producers_users.findAll({
            where: {
                active: true
            },
            order: [['pru_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.producers_users.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.producers_users.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProducersUsersService;