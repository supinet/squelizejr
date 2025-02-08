const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll(where = {}) {
        return dataSource[this.model].findAll({ where: { ...where }});    
    }

    async getAllByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async getRecord(where) {
        return dataSource[this.model].findOne({ where: { ...where } })
    }

    async getAndCountRecord(options) {
        return dataSource[this.model].findAndCountAll({ ...options });
    }

    async create(recordData) {
        return dataSource[this.model].create(recordData);
    }

    async update(record, where, t = {}) {
        const records = dataSource[this.model]
            .update(record, {
                where: { ...where },
                transaction: t
            });

        if (records[0] === 0) {
            return false;
        }

        return true;
    }

    async delete(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }


}
 module.exports = Services;