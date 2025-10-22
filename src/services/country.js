const { models } = require('../config/database');

class CountryService {

    constructor() {}

    async find() {
        const res = await models.country.findAll({
            where: {
                active: true
            },
            order: [['c_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.country.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.country.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = CountryService;