const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CourseService = require('../services/CourseService.js');
const courseService = new CourseService();

class CourseController extends Controller {
    constructor() {
        super(courseService);
    }

    async getAll(req, res) {
        const { date_start, date_end  }  = req.query;
        const where = {}
        /* if exists params, create a prop {} */
        date_start || date_end ? where.start_date = {} : null;
        /* if exists date_start, add on prop gte value */
        date_start ? where.start_date[Op.gte] = date_start : null;
        /* if exists date_end, add on prop lte value */
        date_end ? where.start_date[Op.lte] = date_end : null;

        try {
            const courses = await courseService.getAll(where);
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CourseController;