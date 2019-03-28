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

var _usershelper = require('../helpers/usershelper');

var _usershelper2 = _interopRequireDefault(_usershelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertText = function convertText(a) {
  return (a.charAt(0).toUpperCase() + a.slice(1)).trim();
};

exports.default = {
  logInValid: function logInValid(req, res, next) {
    var _req$body = req.body,
        email = _req$body.email,
        password = _req$body.password;

    var errors = [];

    if (!email || _validator2.default.isEmpty(email)) {
      errors.push('Please insert your email address.');
    }
    if (!password || _validator2.default.isEmpty(password)) {
      errors.push('Please insert your password.');
    }
    if (errors.length > 0) {
      return res.status(400).send({
        success: false,
        message: 'One or more fields are missing.',
        data: errors
      });
    }
    req.body.email = email.trim();
    req.body.password = password.trim();
    return next();
  },

  signUpValid: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var _req$body2, firstName, lastName, email, password, role, errors, newFirstName, newLastName, newEmail, newPassword, newRole, fields, emptyField, result;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body2 = req.body, firstName = _req$body2.firstName, lastName = _req$body2.lastName, email = _req$body2.email, password = _req$body2.password, role = _req$body2.role;
              errors = [];
              newFirstName = convertText(firstName);
              newLastName = convertText(lastName);
              newEmail = email.trim();
              newPassword = password.trim();
              newRole = role.trim().toLowerCase();
              fields = [newFirstName, newLastName, newEmail, newPassword, newRole];
              emptyField = void 0;

              fields.map(function (field) {
                if (!field || _validator2.default.isEmpty(field)) {
                  emptyField = true;
                }
                return emptyField;
              });

              if (!emptyField) {
                _context.next = 12;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'Please fill in all fields.' }));

            case 12:
              if (!_validator2.default.isAlpha(newFirstName)) {
                errors.push('Your first name should contain only alphabets.');
              }
              if (!_validator2.default.isLength(newFirstName, { min: 2, max: 50 })) {
                errors.push('Your first name should be between 2 and 50 characters long');
              }
              if (!_validator2.default.isAlpha(newLastName)) {
                errors.push('Your last name should contain only alphabets.');
              }
              if (!_validator2.default.isLength(newLastName, { min: 2, max: 50 })) {
                errors.push('Your last name should be between 2 and 50 characters long.');
              }
              if (!_validator2.default.isEmail(newEmail)) {
                errors.push('Please insert a valid email address.');
              }
              if (!_validator2.default.isLength(newPassword, { min: 6, max: 25 })) {
                errors.push('Your password should be between 6 and 25 characters long.');
              }
              if (!_validator2.default.isAlphanumeric(newPassword)) {
                errors.push('Your password should contain only letters and numbers.');
              }
              if (!_validator2.default.isIn(newRole, ['admin', 'attendant'])) {
                errors.push('Please insert a valid role');
              }

              if (!(errors.length > 0)) {
                _context.next = 22;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                success: false,
                data: errors
              }));

            case 22:
              req.body.firstName = newFirstName;
              req.body.lastName = newLastName;
              req.body.email = newEmail;
              req.body.password = newPassword;
              req.body.role = newRole;

              _context.prev = 27;
              _context.next = 30;
              return _usershelper2.default.logIn(newEmail);

            case 30:
              result = _context.sent;

              if (!result) {
                _context.next = 33;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'This email address is already taken.' }));

            case 33:
              _context.next = 38;
              break;

            case 35:
              _context.prev = 35;
              _context.t0 = _context['catch'](27);
              return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

            case 38:
              return _context.abrupt('return', next());

            case 39:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[27, 35]]);
    }));

    function signUpValid(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return signUpValid;
  }()
};
module.exports = exports.default;
//# sourceMappingURL=authvalidation.js.map