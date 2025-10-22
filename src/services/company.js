const { models } = require('../config/database');

class CompanyService {

    constructor() {}

    async find() {
        const res = await models.company.findAll({
            where: {
                active: true
            },
            order: [['co_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.company.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.company.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = CompanyService;