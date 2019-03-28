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

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var JWT_SECRET = process.env.JWT_SECRET;

var Hashes = function () {
  function Hashes() {
    (0, _classCallCheck3.default)(this, Hashes);
  }

  (0, _createClass3.default)(Hashes, null, [{
    key: 'generateToken',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload) {
        var token;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _jsonwebtoken2.default.sign(payload, JWT_SECRET, { expiresIn: '120d' });

              case 2:
                token = _context.sent;
                return _context.abrupt('return', token);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function generateToken(_x) {
        return _ref.apply(this, arguments);
      }

      return generateToken;
    }()
  }, {
    key: 'verifyToken',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
        var decoded;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _jsonwebtoken2.default.verify(token, JWT_SECRET);

              case 2:
                decoded = _context2.sent;
                return _context2.abrupt('return', decoded);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifyToken(_x2) {
        return _ref2.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: 'hashPassword',
    value: function hashPassword(password) {
      return _bcryptjs2.default.hashSync(password, _bcryptjs2.default.genSaltSync(10));
    }
  }, {
    key: 'comparePassword',
    value: function comparePassword(password, hashPassword) {
      return _bcryptjs2.default.compareSync(password, hashPassword);
    }
  }]);
  return Hashes;
}();

exports.default = Hashes;
module.exports = exports.default;
//# sourceMappingURL=hashes.js.map