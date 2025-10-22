const { models } = require('../config/database');

class ProjectSocialLinksService {

    constructor() {}

    async find() {
        const res = await models.project_social_links.findAll({
            where: {
                active: true
            },
            order: [['psl_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.project_social_links.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.project_social_links.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProjectSocialLinksService;