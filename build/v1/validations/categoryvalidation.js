'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _categorieshelper = require('../helpers/categorieshelper');

var _categorieshelper2 = _interopRequireDefault(_categorieshelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertText = function convertText(a) {
  return (a.charAt(0).toUpperCase() + a.slice(1)).trim();
};

exports.default = {
  createCategoryValid: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var name, errors, newName, checkInput, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = req.body.name;
              errors = [];
              newName = convertText(name);
              checkInput = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

              if (!(!newName || _validator2.default.isEmpty(newName))) {
                _context.next = 6;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'Please fill in name field.' }));

            case 6:
              if (checkInput.test(newName)) {
                errors.push('Category name should contain only alphabets and numbers.');
              }
              if (!_validator2.default.isLength(newName, { min: 2, max: 50 })) {
                errors.push('Category name should be between 2 and 50 characters long');
              }

              if (!(errors.length > 0)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                success: false,
                data: errors
              }));

            case 10:
              req.body.name = newName;

              _context.prev = 11;
              _context.next = 14;
              return _categorieshelper2.default.getCategoryByName(newName);

            case 14:
              result = _context.sent;

              if (!result) {
                _context.next = 17;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'This category already exists.' }));

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context['catch'](11);
              return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

            case 22:
              return _context.abrupt('return', next());

            case 23:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[11, 19]]);
    }));

    function createCategoryValid(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return createCategoryValid;
  }()
};
module.exports = exports.default;
//# sourceMappingURL=categoryvalidation.js.map