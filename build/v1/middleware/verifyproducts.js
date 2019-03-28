'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _Products = require('../models/Products');

var _Products2 = _interopRequireDefault(_Products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  verify: function verify(req, res, next) {
    var sales = req.body.sales;

    var sellerId = req.user.id;
    var counter = 0;
    var total = 0;
    var newQuantity = 0;
    var productLength = sales.length;
    sales.forEach(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sale) {
        var name, quantitySold, result, id, price, quantity;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = sale.name, quantitySold = sale.quantitySold;
                _context.prev = 1;
                _context.next = 4;
                return _Products2.default.getProductByName(name);

              case 4:
                result = _context.sent;

                if (result) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt('return', res.status(400).send({ success: false, message: name + ' does not exist.' }));

              case 7:
                id = result.id, price = result.price, quantity = result.quantity;

                if (!(quantity < quantitySold)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', res.status(400).send({
                  success: false,
                  message: 'The quantity of ' + name + ' requested is more than we have in stock.'
                }));

              case 10:
                total = price * quantitySold;
                newQuantity = quantity - quantitySold;
                sales[counter].price = price;
                sales[counter].saleTotal = total;
                sales[counter].productId = id;
                sales[counter].sellerId = sellerId;
                sales[counter].newQuantity = newQuantity;
                counter += 1;
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](1);
                return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

              case 23:
                if (counter === productLength) next();
                return _context.abrupt('return', true);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[1, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
};
module.exports = exports.default;
//# sourceMappingURL=verifyproducts.js.map