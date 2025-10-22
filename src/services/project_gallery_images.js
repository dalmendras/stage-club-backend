const { models } = require('../config/database');

class ProjectGalleryImagesService {

    constructor() {}

    async find() {
        const res = await models.project_gallery_images.findAll({
            where: {
                active: true
            },
            order: [['pgi_id', 'ASC']]
        });
        return res;
    }

    async findOne(id) {
        const res = await models.project_gallery_images.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.project_gallery_images.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
}

module.exports = ProjectGalleryImagesService;