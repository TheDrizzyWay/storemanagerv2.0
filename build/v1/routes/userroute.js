'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _usercontroller = require('../controllers/usercontroller');

var _usercontroller2 = _interopRequireDefault(_usercontroller);

var _authmiddleware = require('../middleware/authmiddleware');

var _idvalidation = require('../validations/idvalidation');

var _idvalidation2 = _interopRequireDefault(_idvalidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllUsers = _usercontroller2.default.getAllUsers,
    getUserById = _usercontroller2.default.getUserById,
    getCurrentUser = _usercontroller2.default.getCurrentUser,
    deleteUser = _usercontroller2.default.deleteUser;
var idValid = _idvalidation2.default.idValid;


var router = _express2.default.Router();

router.get('/', _authmiddleware.requireAuth, _authmiddleware.adminAuth, getAllUsers);
router.get('/profile', _authmiddleware.requireAuth, getCurrentUser);
router.get('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, getUserById);
router.delete('/:id', _authmiddleware.requireAuth, _authmiddleware.adminAuth, idValid, deleteUser);

exports.default = router;
module.exports = exports.default;
//# sourceMappingURL=userroute.js.map