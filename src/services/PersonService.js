const dataSource = require('../database/models');
const Services = require('./Services.js');

class PersonService extends Services {
    constructor() {
        super('Person');
        this.enrollmentService = new Services("Enrollment");
    }

    async getActiveEnrollmentByStudent(studentId) {
        const student = await super.getById(studentId);
        const enrollments = await student.getEnrollmentClasses();
        return enrollments;
    }

    async getAllEnrollmentByStudent(studentId) {
        const student = await super.getById(studentId);
        const enrollments = await student.getAllEnrollments();
        return enrollments;
    }

    async getAllByScope() {
        const records = await super.getAllByScope('allRecords');
        return records;
    }

    async canelPersonAndEnrollments(studentId) {
        return dataSource.sequelize.transaction(async (transaction) => {
            await super.update({ active: false }, { id: studentId }, transaction);
            await this.enrollmentService.update({ status: 'cancelado' }, { student_id: studentId }, transaction);
        });
    }
}

module.exports = PersonService;