const { models } = require('../config/database');

class MaCommuneService {

    constructor() {}

    async find() {
        const res = await models.ma_commune.findAll({
            where: {
                active: true
            },
            order: [['com_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_commune.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_commune.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaCommuneService;