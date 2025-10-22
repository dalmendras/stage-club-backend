const { models } = require('../config/database');

class MaVenueService {

    constructor() {}

    async find() {
        const res = await models.ma_venue.findAll({
            where: {
                active: true
            },
            order: [['ven_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_venue.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_venue.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaVenueService;