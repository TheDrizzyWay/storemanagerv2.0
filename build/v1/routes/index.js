'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _authroute = require('./authroute');

var _authroute2 = _interopRequireDefault(_authroute);

var _userroute = require('./userroute');

var _userroute2 = _interopRequireDefault(_userroute);

var _productroute = require('./productroute');

var _productroute2 = _interopRequireDefault(_productroute);

var _categoryroute = require('./categoryroute');

var _categoryroute2 = _interopRequireDefault(_categoryroute);

var _salesroute = require('./salesroute');

var _salesroute2 = _interopRequireDefault(_salesroute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.use('/auth', _authroute2.default);
router.use('/users', _userroute2.default);
router.use('/products', _productroute2.default);
router.use('/categories', _categoryroute2.default);
// router.use('/sales', salesRoute);

exports.default = router;
module.exports = exports.default;
//# sourceMappingURL=index.js.map