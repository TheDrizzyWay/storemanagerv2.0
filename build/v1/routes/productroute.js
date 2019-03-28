'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productcontroller = require('../controllers/productcontroller');

var _productcontroller2 = _interopRequireDefault(_productcontroller);

var _authmiddleware = require('../middleware/authmiddleware');

var _idvalidation = require('../validations/idvalidation');

var _idvalidation2 = _interopRequireDefault(_idvalidation);

var _productvalidation = require('../validations/productvalidation');

var _productvalidation2 = _interopRequireDefault(_productvalidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProduct = _productcontroller2.default.createProduct,
    getAllProducts = _productcontroller2.default.getAllProducts,
    getProductById = _productcontroller2.default.getProductById,
    updateProduct = _productcontroller2.default.updateProduct,
    deleteProduct = _productcontroller2.default.deleteProduct,
    getProductSales = _productcontroller2.default.getProductSales;
var idValid = _idvalidation2.default.idValid;
var createProductValid = _productvalidation2.default.createProductValid,
    updateProductValid = _productvalidation2.default.updateProductValid;


var router = _express2.default.Router();

router.post('/', _authmiddleware.requireAuth, _authmiddleware.adminAuth, createProductValid, createProduct);
router.get('/', _authmiddleware.requireAuth, getAllProducts);
router.get('/records/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, getProductSales);
router.get('/:id', _authmiddleware.requireAuth, idValid, getProductById);
router.put('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, updateProductValid, updateProduct);
router.delete('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, deleteProduct);

exports.default = router;
module.exports = exports.default;
//# sourceMappingURL=productroute.js.map