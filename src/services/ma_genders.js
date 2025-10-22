const { models } = require('../config/database');

class MaGendersService {

    constructor() {}

    async find() {
        const res = await models.ma_genders.findAll({
            where: {
                active: true
            },
            order: [['gdr_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_genders.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_genders.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaGendersService;