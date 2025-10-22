const { models } = require('../config/database');

class ProducersService {

    constructor() {}

    async find() {
        const res = await models.producers.findAll({
            where: {
                active: true
            },
            order: [['pro_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.producers.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.producers.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProducersService;