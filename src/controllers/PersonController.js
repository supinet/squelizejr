const Controller = require('./Controller.js');
const PersonService = require('../services/PersonService.js');
const personService = new PersonService();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }
    async getActiveEnrollments(req, res, next) {
        const { studentId } = req.params;
        try {
            const enrollments = await personService.getActiveEnrollmentByStudent(Number(studentId));
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: message.error });
        }
    }

    async getAllEnrollments(req, res, next) {
        const { studentId } = req.params;
        try {
            const enrollments = await personService.getAllEnrollmentByStudent(Number(studentId));
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: message.error });
        }
    }

    async getAll(req, res) {
        try {
            const all = await personService.getAllByScope();
            return res.status(200).json(all);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PersonController;