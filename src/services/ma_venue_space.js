const { models } = require('../config/database');

class MaVenueSpaceService {

    constructor() {}

    async find() {
        const res = await models.ma_venue_space.findAll({
            where: {
                active: true
            },
            order: [['ves_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_venue_space.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_venue_space.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaVenueSpaceService;