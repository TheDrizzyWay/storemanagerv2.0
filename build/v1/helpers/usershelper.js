'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

var UserHelper = function () {
  function UserHelper() {
    (0, _classCallCheck3.default)(this, UserHelper);
  }

  (0, _createClass3.default)(UserHelper, null, [{
    key: 'signUp',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(user) {
        var newUser;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return User.create(user);

              case 2:
                newUser = _context.sent;
                return _context.abrupt('return', newUser);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signUp(_x) {
        return _ref.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: 'logIn',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(email) {
        var findUser;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return User.findOne({
                  where: { email: email }
                });

              case 2:
                findUser = _context2.sent;
                return _context2.abrupt('return', findUser);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logIn(_x2) {
        return _ref2.apply(this, arguments);
      }

      return logIn;
    }()
  }, {
    key: 'getAllUsers',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var users;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return User.findAll({
                  attributes: {
                    exclude: ['password']
                  }
                });

              case 2:
                users = _context3.sent;
                return _context3.abrupt('return', users);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAllUsers() {
        return _ref3.apply(this, arguments);
      }

      return getAllUsers;
    }()
  }, {
    key: 'getUserById',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
        var user;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return User.findOne({
                  where: { id: id },
                  attributes: {
                    exclude: ['password']
                  }
                });

              case 2:
                user = _context4.sent;
                return _context4.abrupt('return', user);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getUserById(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getUserById;
    }()
  }, {
    key: 'deleteUser',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
        var result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return User.destroy({
                  where: { id: id }
                });

              case 2:
                result = _context5.sent;
                return _context5.abrupt('return', result);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteUser(_x4) {
        return _ref5.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);
  return UserHelper;
}();

exports.default = UserHelper;
module.exports = exports.default;
//# sourceMappingURL=usershelper.js.map