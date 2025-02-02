const Controller = require('./Controller.js');
const CategoryService = require('../services/CategoryService.js');
const categoryService = new CategoryService();

class CategoryController extends Controller {
    constructor() {
        super(categoryService);
    }
}

module.exports = CategoryController;