const { models } = require('../config/database');

class SocialPlatformsService {

    constructor() {}

    async find() {
        const res = await models.social_platforms.findAll({
            where: {
                active: true
            },
            order: [['psl_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.social_platforms.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.social_platforms.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = SocialPlatformsService;