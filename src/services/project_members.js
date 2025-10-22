const { models } = require('../config/database');

class ProjectMembersService {

    constructor() {}

    async find() {
        const res = await models.project_members.findAll({
            where: {
                active: true
            },
            order: [['pm_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.project_members.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.project_members.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProjectMembersService;