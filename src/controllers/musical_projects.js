const MusicalProjectsService = require('../services/musical_projects');
const service = new MusicalProjectsService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
        console.log(error);
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
        console.log(error);
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        if (isNaN(id)) {
            return res.status(400).send({ success: false, message: 'Invalid ID type' });
        }
        const response = await service.findOne(id);
        if (!response) {
            res.status(404).send({ success: false, message: 'Not Found' });
        } else {
            res.json(response);
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        if (response) {
            return res.json({   success: true, 
                                message: 'Updated',
                                //data: response 
                            });
        } else {
            return res.status(400).send({ success: false, message: 'Update failed' });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
        console.log(error);
    }
}

module.exports = {
    create, get, getById, update
};
