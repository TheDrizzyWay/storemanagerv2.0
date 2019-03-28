'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attendantAuth = exports.adminAuth = exports.requireAuth = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hashes = require('./hashes');

var _hashes2 = _interopRequireDefault(_hashes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireAuth = exports.requireAuth = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
    var authHeader, token, decoded;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            authHeader = req.headers.authorization;

            if (!(typeof authHeader === 'undefined')) {
              _context.next = 4;
              break;
            }

            res.status(401).send({ success: false, message: 'Unauthorized - Header Not Set' });
            return _context.abrupt('return');

          case 4:
            token = authHeader.split(' ')[1];

            if (token) {
              _context.next = 8;
              break;
            }

            res.status(401).send({ success: false, message: 'Access Denied. Please Log In.' });
            return _context.abrupt('return');

          case 8:
            _context.prev = 8;
            _context.next = 11;
            return _hashes2.default.verifyToken(token);

          case 11:
            decoded = _context.sent;

            req.user = decoded;
            next();
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](8);

            res.status(500).send({ success: false, message: 'Error verifying user.' });

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[8, 16]]);
  }));

  return function requireAuth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var adminAuth = exports.adminAuth = function adminAuth(req, res, next) {
  var role = req.user.role;

  if (role !== 'admin') {
    return res.status(403).send({ success: false, message: 'Access Denied. For Admins only.' });
  }
  return next();
};

var attendantAuth = exports.attendantAuth = function attendantAuth(req, res, next) {
  var role = req.user.role;

  if (role !== 'attendant') {
    return res.status(403).send({ success: false, message: 'Access Denied. For attendants only.' });
  }
  return next();
};
//# sourceMappingURL=authmiddleware.js.map