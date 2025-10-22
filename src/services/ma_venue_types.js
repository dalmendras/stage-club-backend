const { models } = require('../config/database');

class MaVenueTypesService {

    constructor() {}

    async find() {
        const res = await models.ma_venue_types.findAll({
            where: {
                active: true
            },
            order: [['vet_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_venue_types.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_venue_types.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaVenueTypesService;