const { models } = require('../config/database');

class MaArtistTypeService {

    constructor() {}

    async find() {
        const res = await models.ma_artist_type.findAll({
            where: {
                active: true
            },
            order: [['art_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.ma_artist_type.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.ma_artist_type.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MaArtistTypeService;