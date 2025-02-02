const { Router } =  require('express');
const CourseController = require('../controllers/CourseController.js');
const courseController = new CourseController();

const router = Router();

router.get('/course', (req, res) => courseController.getAll(req, res));
router.get('/course', (req, res) => courseController.getById(req, res));
router.post('/course', (req, res) => courseController.create(req, res));
router.put('/course/:id', (req, res) => courseController.update(req, res));
router.delete('/course/:id', (req, res) => courseController.delete(req, res));

module.exports = router;