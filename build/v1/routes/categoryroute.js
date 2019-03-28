'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _categorycontroller = require('../controllers/categorycontroller');

var _categorycontroller2 = _interopRequireDefault(_categorycontroller);

var _authmiddleware = require('../middleware/authmiddleware');

var _idvalidation = require('../validations/idvalidation');

var _idvalidation2 = _interopRequireDefault(_idvalidation);

var _categoryvalidation = require('../validations/categoryvalidation');

var _categoryvalidation2 = _interopRequireDefault(_categoryvalidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCategory = _categorycontroller2.default.createCategory,
    getAllCategories = _categorycontroller2.default.getAllCategories,
    getCategoryById = _categorycontroller2.default.getCategoryById,
    updateCategory = _categorycontroller2.default.updateCategory,
    deleteCategory = _categorycontroller2.default.deleteCategory;
var idValid = _idvalidation2.default.idValid;
var createCategoryValid = _categoryvalidation2.default.createCategoryValid;

var router = _express2.default.Router();

router.post('/', _authmiddleware.requireAuth, _authmiddleware.adminAuth, createCategoryValid, createCategory);
router.get('/', _authmiddleware.requireAuth, getAllCategories);
router.get('/:id', _authmiddleware.requireAuth, idValid, getCategoryById);
router.put('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, createCategoryValid, updateCategory);
router.delete('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, deleteCategory);

exports.default = router;
module.exports = exports.default;
//# sourceMappingURL=categoryroute.js.map