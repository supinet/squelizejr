const Controller = require('./Controller.js');
const EnrollmentService = require('../services/EnrollmentService.js');
const enrollmentService = new EnrollmentService();

class EnrollmentController extends Controller {
    constructor() {
        super(enrollmentService);
    }
}

module.exports = EnrollmentController;