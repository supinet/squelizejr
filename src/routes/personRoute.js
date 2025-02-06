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
router.delete('/person/:id', (req, res) => personController.delete(req, res));
router.get('/person/:studentId/enrollment', (req, res) => personController.getEnrollments(req, res));
router.post('/person/:studentId/enrollment', (req, res) => enrollmentController.create(req, res));

module.exports = router;