'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Sales = require('../models/Sales');

var _Sales2 = _interopRequireDefault(_Sales);

var _Products = require('../models/Products');

var _Products2 = _interopRequireDefault(_Products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createSale: function createSale(req, res) {
    var counter = 0;
    var sales = req.body.sales;

    var productLength = sales.length;
    var resultArray = [];
    sales.forEach(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sale) {
        var productId, newQuantity, newSale, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                productId = sale.productId, newQuantity = sale.newQuantity;
                newSale = new _Sales2.default(sale);
                _context.prev = 2;
                _context.next = 5;
                return newSale.createSale();

              case 5:
                result = _context.sent;
                _context.next = 8;
                return _Products2.default.updateProductQuantity(productId, newQuantity);

              case 8:
                resultArray.push(result);
                counter += 1;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](2);
                return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

              case 15:
                if (!(counter === productLength)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt('return', res.status(201).send({
                  success: true,
                  message: 'Transaction completed successfully.',
                  data: resultArray
                }));

              case 17:
                return _context.abrupt('return', true);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[2, 12]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  },

  getAllSales: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _req$user, id, role, result, _result;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$user = req.user, id = _req$user.id, role = _req$user.role;

              if (!(role === 'admin')) {
                _context2.next = 16;
                break;
              }

              _context2.prev = 2;
              _context2.next = 5;
              return _Sales2.default.getAllSalesAdmin();

            case 5:
              result = _context2.sent;

              if (!(result.length === 0)) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', res.status(200).send({ success: false, message: 'No sales available yet' }));

            case 8:
              return _context2.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2['catch'](2);
              return _context2.abrupt('return', res.status(500).send({ success: false, message: _context2.t0.message }));

            case 14:
              _context2.next = 28;
              break;

            case 16:
              _context2.prev = 16;
              _context2.next = 19;
              return _Sales2.default.getAllSalesAttendant(id);

            case 19:
              _result = _context2.sent;

              if (!(_result.length === 0)) {
                _context2.next = 22;
                break;
              }

              return _context2.abrupt('return', res.status(200).send({ success: false, message: 'No sales available yet' }));

            case 22:
              return _context2.abrupt('return', res.status(200).send({ success: true, data: _result }));

            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2['catch'](16);
              return _context2.abrupt('return', res.status(500).send({ success: false, message: _context2.t1.message }));

            case 28:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[2, 11], [16, 25]]);
    }));

    function getAllSales(_x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return getAllSales;
  }(),

  getSaleById: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _Sales2.default.getSaleById(id);

            case 4:
              result = _context3.sent;

              if (result) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({ success: false, message: 'Sale record not found' }));

            case 7:
              return _context3.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(500).send({ success: false, message: _context3.t0.message }));

            case 13:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 10]]);
    }));

    function getSaleById(_x4, _x5) {
      return _ref3.apply(this, arguments);
    }

    return getSaleById;
  }()
};
module.exports = exports.default;
//# sourceMappingURL=salescontroller.js.map