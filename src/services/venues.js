const { models } = require('../config/database');

class VenuesService {

    constructor() {}

    async find() {
        const res = await models.venues.findAll({
            where: {
                active: true
            },
            order: [['ve_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.venues.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.venues.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = VenuesService;