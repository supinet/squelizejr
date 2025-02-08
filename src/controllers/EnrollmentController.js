const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const EnrollmentService = require('../services/EnrollmentService.js');
const enrollmentService = new EnrollmentService();

class EnrollmentController extends Controller {
    constructor() {
        super(enrollmentService);
    }

    async getEnrollmentByStudent(req, res, next) {
        const { student_id  } = req.params;
        try {
            const records = await this.entityService.getAndCountRecord(
            {
                where: {
                    student_id: Number(student_id),
                    status: 'matriculado'
                },
                // limit: 2,
                order: [['id', 'DESC']]
            });
            return res.status(200).json(records);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getFullCourses(req, res) {
        const fullCourseLimit = 2;
        try {
            const fullCourses = await enrollmentService.getAndCountRecord(
                {
                    where: {
                        status: 'matriculado'
                    },
                    attributes: ['course_id'],
                    group: ['course_id'],
                    having: Sequelize.literal(`count(course_id) >= ${fullCourseLimit} `)
                });
            return res.status(200).json(fullCourses);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    }
}

module.exports = EnrollmentController;