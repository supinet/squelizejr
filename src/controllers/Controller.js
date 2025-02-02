class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res, next) {
        try {
            const records =  await this.entityService.getAll();
            return res.status(200).json(records);
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        const { id  } = req.params;
        try {
            const record = await this.entityService.getRecordById(Number(id));
            return res.status(200).json(record);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const record = req.body;
        try {
            const newRecord = await this.entityService.create(record);
            return res.status(200).json(newRecord);
        } catch(error) {
            next(error);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const records = req.body;
        try {
            const updated = await this.entityService.update(records, Number(id));
            if (!updated) {
                return res.statu(400).json({ message: 'record not updated' });
            }
            return res.status(200).json({ message:  'record updated'});
        } catch (error) {
            next(error);
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