const parseIds = require('../utils/parseStringHelper.js');

class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAllActive(req, res, next) {
        try {
            const records =  await this.entityService.getAll();
            return res.status(200).json(records);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res, next) {
        const { id  } = req.params;
        try {
            const record = await this.entityService.getById(Number(id));
            return res.status(200).json(record);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getRecord(req, res, next) {
        const { ...params  } = req.params;
        const where = parseIds(params);
        try {
            const record = await this.entityService.getRecord(where);
            return res.status(200).json(record);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res, next) {
        const record = req.body;
        try {
            const newRecord = await this.entityService.create(record);
            return res.status(200).json(newRecord);
        } catch(error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        const { ...params } = req.params;
        const records = req.body;
        const where = parseIds(params);
        try {
            const updated = await this.entityService.update(records, where);
            if (!updated) {
                return res.statu(400).json({ message: 'record not updated' });
            }
            return res.status(200).json({ message:  'record updated'});
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await this.entityService.delete(Number(id));
            return res.status(200).json({ message: `id ${id} deleted` });
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller;