const { models } = require('../config/database');

class ProjectGenderService {

    constructor() {}

    async find() {
        const res = await models.project_gender.findAll({
            where: {
                active: true
            },
            order: [['pg_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.project_gender.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.project_gender.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProjectGenderService;