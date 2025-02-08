const Controller = require('./Controller.js');
const PersonService = require('../services/PersonService.js');
const personService = new PersonService();

class PersonController extends Controller {
    constructor() {
        super(personService);
    }
    async getActiveEnrollments(req, res, next) {
        const { student_id } = req.params;
        try {
            const enrollments = await personService.getActiveEnrollmentByStudent(Number(student_id));
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: error.messate });
        }
    }

    async getAllEnrollments(req, res, next) {
        const { student_id } = req.params;
        try {
            const enrollments = await personService.getAllEnrollmentByStudent(Number(student_id));
            return res.status(200).json(enrollments);
        } catch (error) {
            return res.status(500).json({ error: error.message });
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

    async cancelEnrollment(req, res) {
        const { student_id } = req.params;
        try {
            await personService.canelPersonAndEnrollments(Number(student_id));
            return res.status(200).json({ message: `student enrollment ${student_id} cancelled` });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PersonController;