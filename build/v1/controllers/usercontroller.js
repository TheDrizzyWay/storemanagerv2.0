'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hashes = require('../middleware/hashes');

var _hashes2 = _interopRequireDefault(_hashes);

var _usershelper = require('../helpers/usershelper');

var _usershelper2 = _interopRequireDefault(_usershelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signUp: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var user, newUser;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = req.body;

              user.password = _hashes2.default.hashPassword(user.password);

              _context.prev = 2;
              _context.next = 5;
              return _usershelper2.default.signUp(user);

            case 5:
              newUser = _context.sent;
              return _context.abrupt('return', res.status(201).send({
                success: true,
                message: 'User account created successfully',
                data: newUser
              }));

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);
              return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 9]]);
    }));

    function signUp(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signUp;
  }(),

  logIn: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$body, email, password, result, userPassword, id, role, token;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password;
              _context2.prev = 1;
              _context2.next = 4;
              return _usershelper2.default.logIn(email);

            case 4:
              result = _context2.sent;

              if (result) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', res.status(401).send({ success: false, message: 'User account not found.' }));

            case 7:
              userPassword = result.password;

              if (_hashes2.default.comparePassword(password, userPassword)) {
                _context2.next = 10;
                break;
              }

              return _context2.abrupt('return', res.status(401).send({
                success: false,
                message: 'Invalid email/password combination.'
              }));

            case 10:
              id = result.id, role = result.role;
              _context2.next = 13;
              return _hashes2.default.generateToken({ id: id, role: role });

            case 13:
              token = _context2.sent;
              return _context2.abrupt('return', res.status(200).send({ success: true, message: 'You are now logged in.', token: token }));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2['catch'](1);
              return _context2.abrupt('return', res.status(500).send({ success: false, message: _context2.t0.message }));

            case 20:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[1, 17]]);
    }));

    function logIn(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return logIn;
  }(),

  getAllUsers: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _usershelper2.default.getAllUsers();

            case 3:
              result = _context3.sent;
              return _context3.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(500).send({ success: false, message: _context3.t0.message }));

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    function getAllUsers(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return getAllUsers;
  }(),

  getUserById: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, result;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _usershelper2.default.getUserById(id);

            case 4:
              result = _context4.sent;

              if (result) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt('return', res.status(400).send({ success: false, message: 'User not found' }));

            case 7:
              return _context4.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(500).send({ success: false, message: _context4.t0.message }));

            case 13:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 10]]);
    }));

    function getUserById(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return getUserById;
  }(),

  getCurrentUser: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var id, result;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.user.id;
              _context5.next = 4;
              return _usershelper2.default.getUserById(id);

            case 4:
              result = _context5.sent;
              return _context5.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(500).send({ success: false, message: _context5.t0.message }));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 8]]);
    }));

    function getCurrentUser(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return getCurrentUser;
  }(),

  deleteUser: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var id, findUser;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              _context6.next = 4;
              return _usershelper2.default.getUserById(id);

            case 4:
              findUser = _context6.sent;

              if (findUser) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt('return', res.status(400).send({ success: false, message: 'User not found.' }));

            case 7:
              _context6.next = 9;
              return _usershelper2.default.deleteUser(id);

            case 9:
              return _context6.abrupt('return', res.status(200).send({ success: true, message: 'User deleted successfully.' }));

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(500).send({ success: false, message: _context6.t0.message }));

            case 15:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 12]]);
    }));

    function deleteUser(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return deleteUser;
  }()
  // update user
};
module.exports = exports.default;
//# sourceMappingURL=usercontroller.js.map