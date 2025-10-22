const { models } = require('../config/database');

class ArtistProfilesService {

    constructor() {}

    async find() {
        const res = await models.artist_profiles.findAll({
            where: {
                active: true
            },
            order: [['ap_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.artist_profiles.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.artist_profiles.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ArtistProfilesService;