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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _dbconfig = require('../database/dbconfig');

var _dbconfig2 = _interopRequireDefault(_dbconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sale = function () {
  function Sale(sale) {
    (0, _classCallCheck3.default)(this, Sale);

    this.productId = sale.productId;
    this.name = sale.name;
    this.price = sale.price;
    this.quantitySold = sale.quantitySold;
    this.total = sale.saleTotal;
    this.sellerId = sale.sellerId;
  }

  (0, _createClass3.default)(Sale, [{
    key: 'createSale',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var text, values, _ref2, rows;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                text = 'INSERT INTO sales (sale_id, product_id, name, price, quantity_sold,\n      total, seller_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
                values = [_uuid2.default.v4(), this.productId, this.name, this.price, this.quantitySold, this.total, this.sellerId];
                _context.next = 4;
                return _dbconfig2.default.query(text, values);

              case 4:
                _ref2 = _context.sent;
                rows = _ref2.rows;
                return _context.abrupt('return', rows[0]);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createSale() {
        return _ref.apply(this, arguments);
      }

      return createSale;
    }()
  }], [{
    key: 'getAllSalesAdmin',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var text, _ref4, rows;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                text = 'SELECT * FROM sales';
                _context2.next = 3;
                return _dbconfig2.default.query(text);

              case 3:
                _ref4 = _context2.sent;
                rows = _ref4.rows;
                return _context2.abrupt('return', rows);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllSalesAdmin() {
        return _ref3.apply(this, arguments);
      }

      return getAllSalesAdmin;
    }()
  }, {
    key: 'getAllSalesAttendant',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
        var text, values, _ref6, rows;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                text = 'SELECT * FROM sales WHERE seller_id = $1';
                values = [id];
                _context3.next = 4;
                return _dbconfig2.default.query(text, values);

              case 4:
                _ref6 = _context3.sent;
                rows = _ref6.rows;
                return _context3.abrupt('return', rows);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAllSalesAttendant(_x) {
        return _ref5.apply(this, arguments);
      }

      return getAllSalesAttendant;
    }()
  }, {
    key: 'getSaleById',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
        var text, values, _ref8, rows;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                text = 'SELECT * FROM sales WHERE sale_id = $1';
                values = [id];
                _context4.next = 4;
                return _dbconfig2.default.query(text, values);

              case 4:
                _ref8 = _context4.sent;
                rows = _ref8.rows;
                return _context4.abrupt('return', rows[0]);

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getSaleById(_x2) {
        return _ref7.apply(this, arguments);
      }

      return getSaleById;
    }()
  }]);
  return Sale;
}();

exports.default = Sale;
module.exports = exports.default;
//# sourceMappingURL=Sales.js.map