const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAll() {
        return dataSource[this.model].findAll();    
    }

    async getAllByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getById(id) {
        return dataSource[this.model].findByPk(id);
    }

    async create(recordData) {
        return dataSource[this.model].create(recordData);
    }

    async update(record, id) {
        const records = dataSource[this.model].update(
            record, {
                where: { id: id }
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