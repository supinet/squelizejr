const { Router } =  require('express');
const PersonController = require('../controllers/PersonController.js');
const personController = new PersonController();
const EnrollmentController = require('../controllers/EnrollmentController.js');
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/person', (req, res) => personController.getAllActive(req, res));
router.get('/person/all', (req, res) => personController.getAll(req, res));
router.get('/person/:id', (req, res) => personController.getById(req, res));
router.post('/person', (req, res) => personController.create(req, res));
router.put('/person/:id', (req, res) => personController.update(req, res));
router.put('/person/:student_id/cancel', (req, res) => personController.cancelEnrollment(req, res));
router.delete('/person/:id', (req, res) => personController.delete(req, res));
router.get('/person/:student_id/enrollment', (req, res) => personController.getActiveEnrollments(req, res));
router.get('/person/:student_id/enrollment/all', (req, res) => personController.getAllEnrollments(req, res));
router.get('/person/:student_id/enrollment/ready', (req, res) => enrollmentController.getEnrollmentByStudent(req, res));
router.get('/person/enrollment/full', (req, res) => enrollmentController.getFullCourses(req, res));
router.get('/person/:student_id/enrollment/:id', (req, res) => enrollmentController.getRecord(req, res));
router.post('/person/:student_id/enrollment', (req, res) => enrollmentController.create(req, res));
router.put('/person/:student_id/enrollment/:id', (req, res) => enrollmentController.update(req, res));
router.delete('/person/:student_id/enrollment/:id', (req, res) => enrollmentController.delete(req, res));

module.exports = router;