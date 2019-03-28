'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _hashes = require('../middleware/hashes');

var _hashes2 = _interopRequireDefault(_hashes);

var _dbconfig = require('./dbconfig');

var _dbconfig2 = _interopRequireDefault(_dbconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('seeding database');

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var id, password, hashed, result, params;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = '8e75ed1c-c48a-4de2-9f8c-df597aeace8f';
          password = 'micheal';
          hashed = _hashes2.default.hashPassword(password);
          result = void 0;
          params = [id, 'Micheal', 'Myers', 'mikemyers@email.com', hashed, 'admin'];
          _context.prev = 5;
          _context.next = 8;
          return _dbconfig2.default.query('INSERT INTO users (id, first_name, last_name, email, password, role)\n      VALUES ($1, $2, $3, $4, $5, $6)', params);

        case 8:
          result = _context.sent;
          return _context.abrupt('return', result);

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](5);
          return _context.abrupt('return', _context.t0);

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined, [[5, 12]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
  var id, password, hashed, result, params;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = '3bcbff41-7285-42f4-a934-e346382f3fbc';
          password = 'jasonv';
          hashed = _hashes2.default.hashPassword(password);
          result = void 0;
          params = [id, 'Jason', 'Voorhees', 'jasonv@email.com', hashed, 'attendant'];
          _context2.prev = 5;
          _context2.next = 8;
          return _dbconfig2.default.query('INSERT INTO users (id, first_name, last_name, email, password, role)\n      VALUES ($1, $2, $3, $4, $5, $6)', params);

        case 8:
          result = _context2.sent;
          return _context2.abrupt('return', result);

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2['catch'](5);
          return _context2.abrupt('return', _context2.t0);

        case 15:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined, [[5, 12]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
  var id, params, result;
  return _regenerator2.default.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = '59968089-65d6-438a-b5d3-03ae275fa2de';
          params = [id, 'Predator series'];
          result = void 0;
          _context3.prev = 3;
          _context3.next = 6;
          return _dbconfig2.default.query('INSERT INTO categories (id, name)\n      VALUES ($1, $2)', params);

        case 6:
          result = _context3.sent;
          return _context3.abrupt('return', result);

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3['catch'](3);
          return _context3.abrupt('return', _context3.t0);

        case 13:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined, [[3, 10]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
  var id, params, result;
  return _regenerator2.default.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = '620417b7-ab15-4679-9e5f-94e484ac9887';
          params = [id, 'X series'];
          result = void 0;
          _context4.prev = 3;
          _context4.next = 6;
          return _dbconfig2.default.query('INSERT INTO categories (id, name)\n      VALUES ($1, $2)', params);

        case 6:
          result = _context4.sent;
          return _context4.abrupt('return', result);

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4['catch'](3);
          return _context4.abrupt('return', _context4.t0);

        case 13:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined, [[3, 10]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
  var id, params, result;
  return _regenerator2.default.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = '5a1f3030-cb52-462a-a81c-ab53f115ed21';
          params = [id, 'adidas predator boot', 'predator description', '15000', '10', '2', 'http://sampleimage.com/image1.png'];
          result = void 0;
          _context5.prev = 3;
          _context5.next = 6;
          return _dbconfig2.default.query('INSERT INTO products (id, name, description, price, quantity, minimum_quantity, imgurl)\n      VALUES ($1, $2, $3, $4, $5, $6, $7)', params);

        case 6:
          result = _context5.sent;
          return _context5.abrupt('return', result);

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](3);
          return _context5.abrupt('return', _context5.t0);

        case 13:
        case 'end':
          return _context5.stop();
      }
    }
  }, _callee5, undefined, [[3, 10]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
  var id, params, result;
  return _regenerator2.default.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = '6522cc1b-c322-462a-97c1-0abd063135c6';
          params = [id, 'Adidas x boot', 'x description', '10000', '10', '3', 'http://sampleimage.com/image1.jpg'];
          result = void 0;
          _context6.prev = 3;
          _context6.next = 6;
          return _dbconfig2.default.query('INSERT INTO products (id, name, description, price, quantity, minimum_quantity, imgurl)\n      VALUES ($1, $2, $3, $4, $5, $6, $7)', params);

        case 6:
          result = _context6.sent;
          return _context6.abrupt('return', result);

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6['catch'](3);
          return _context6.abrupt('return', _context6.t0);

        case 13:
        case 'end':
          return _context6.stop();
      }
    }
  }, _callee6, undefined, [[3, 10]]);
}))();

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
  var saleId, productId, sellerId, params, result;
  return _regenerator2.default.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          saleId = 'd88aea19-0e77-4134-a192-cb1048d13f8e';
          productId = '6522cc1b-c322-462a-97c1-0abd063135c6';
          sellerId = '3bcbff41-7285-42f4-a934-e346382f3fbc';
          params = [saleId, productId, 'Adidas x boot', '10000', '1', '10000', sellerId];
          result = void 0;
          _context7.prev = 5;
          _context7.next = 8;
          return _dbconfig2.default.query('INSERT INTO sales (sale_id, product_id, name, price, quantity_sold, total, seller_id)\n      VALUES ($1, $2, $3, $4, $5, $6, $7)', params);

        case 8:
          result = _context7.sent;
          return _context7.abrupt('return', result);

        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7['catch'](5);
          return _context7.abrupt('return', _context7.t0);

        case 15:
        case 'end':
          return _context7.stop();
      }
    }
  }, _callee7, undefined, [[5, 12]]);
}))();
//# sourceMappingURL=seed.js.map