const { models } = require('../config/database');

class MaProvinceService {

    constructor() {}

    async find() {
        const res = await models.ma_province.findAll({
            where: {
                active: true
            },
            order: [['prv_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_province.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_province.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaProvinceService;