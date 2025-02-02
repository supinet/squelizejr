const Controller = require('./Controller.js');
const PersonService = require('../services/PersonService.js');
const personService = new PersonService();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }
    async getEnrollments(req, res, next) {
        const { studentId } = req.params;
        try {
            const enrollments = await personService.getEnrollmentByStudent(Number(studentId));
            return res.status(200).json(enrollments);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = PersonController;