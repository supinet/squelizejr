const Services = require('./Services.js');

class PersonService extends Services {
    constructor() {
        super('Person');
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
}

module.exports = PersonService;