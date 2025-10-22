const { models } = require('../config/database');

class MaRegionService {

    constructor() {}

    async find() {
        const res = await models.ma_region.findAll({
            where: {
                active: true
            },
            order: [['reg_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_region.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_region.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaRegionService;