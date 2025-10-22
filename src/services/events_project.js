const { models } = require('../config/database');

class EventsProjectService {

    constructor() {}

    async find() {
        const res = await models.events_project.findAll({
            where: {
                active: true
            },
            order: [['epr_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.events_project.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.events_project.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = EventsProjectService;