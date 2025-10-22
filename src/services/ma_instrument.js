const { models } = require('../config/database');

class MaInstrumentService {

    constructor() {}

    async find() {
        const res = await models.ma_instrument.findAll({
            where: {
                active: true
            },
            order: [['inst_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_instrument.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_instrument.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaInstrumentService;