'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dbconfig = require('./dbconfig');

var _dbconfig2 = _interopRequireDefault(_dbconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Dropping tables...');

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _dbconfig2.default.query('DROP TABLE IF EXISTS users CASCADE');

        case 2:
          _context.next = 4;
          return _dbconfig2.default.query('DROP TABLE IF EXISTS products CASCADE');

        case 4:
          _context.next = 6;
          return _dbconfig2.default.query('DROP TABLE IF EXISTS categories CASCADE');

        case 6:
          _context.next = 8;
          return _dbconfig2.default.query('DROP TABLE IF EXISTS sales CASCADE');

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))();
//# sourceMappingURL=droptables.js.map