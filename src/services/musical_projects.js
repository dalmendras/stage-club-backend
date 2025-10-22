const { models } = require('../config/database');

class MusicalProjectsService {

    constructor() {}

    async find() {
        const res = await models.musical_projects.findAll({
            where: {
                active: true
            },
            order: [['mp_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.musical_projects.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.musical_projects.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = MusicalProjectsService;