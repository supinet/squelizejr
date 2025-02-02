const Services = require('./Services.js');

class PersonService extends Services {
    constructor() {
        super('Person');
    }

    async getEnrollmentByStudent(studentId) {
        const student = await super.getById(studentId);
        const enrollments = await student.getEnrollmentClasses();
        return enrollments;
    }
}

module.exports = PersonService;