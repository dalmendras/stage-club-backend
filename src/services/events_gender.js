const { models } = require('../config/database');

class EventsGenderService {

    constructor() {}

    async find() {
        const res = await models.events_gender.findAll({
            where: {
                active: true
            },
            order: [['evg_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.events_gender.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.events_gender.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = EventsGenderService;