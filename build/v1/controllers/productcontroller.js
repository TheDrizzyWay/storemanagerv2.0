'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _productshelper = require('../helpers/productshelper');

var _productshelper2 = _interopRequireDefault(_productshelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createProduct: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var product, result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              product = req.body;
              _context.prev = 1;
              _context.next = 4;
              return _productshelper2.default.createProduct(product);

            case 4:
              result = _context.sent;
              return _context.abrupt('return', res.status(201).send({
                success: true,
                message: 'Product created successfully.',
                data: result
              }));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);
              return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    function createProduct(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createProduct;
  }(),

  getAllProducts: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var result;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _productshelper2.default.getAllProducts();

            case 3:
              result = _context2.sent;

              if (!(result.length === 0)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', res.status(200).send({ success: false, message: 'No products available yet' }));

            case 6:
              return _context2.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(500).send({ success: false, message: _context2.t0.message }));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    function getAllProducts(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getAllProducts;
  }(),

  getProductById: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, result;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _productshelper2.default.getProductById(id);

            case 4:
              result = _context3.sent;

              if (result) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return', res.status(400).send({ success: false, message: 'Product not found' }));

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

    function getProductById(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return getProductById;
  }(),

  updateProduct: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, product, _req$body, name, description, price, quantity, minimumQuantity, imgUrl, result;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = req.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return _productshelper2.default.getProductById(id);

            case 4:
              product = _context4.sent;

              if (product) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt('return', res.status(400).send({ success: false, message: 'Product not found.' }));

            case 7:
              _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, quantity = _req$body.quantity, minimumQuantity = _req$body.minimumQuantity, imgUrl = _req$body.imgUrl;

              product.name = name || product.name;
              product.description = description || product.description;
              product.price = price || product.price;
              product.quantity = quantity || product.quantity;
              product.minimumQuantity = minimumQuantity || product.minimum_quantity;
              product.imgUrl = imgUrl || product.imgurl;

              _context4.next = 16;
              return _productshelper2.default.updateProduct(id, product);

            case 16:
              result = _context4.sent;
              return _context4.abrupt('return', res.status(200).send({
                success: true,
                message: 'Product updated successfully',
                data: result
              }));

            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4['catch'](1);
              return _context4.abrupt('return', res.status(500).send({ success: false, message: _context4.t0.message }));

            case 23:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[1, 20]]);
    }));

    function updateProduct(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return updateProduct;
  }(),

  deleteProduct: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var id, findProduct;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              _context5.next = 4;
              return _productshelper2.default.getProductById(id);

            case 4:
              findProduct = _context5.sent;

              if (findProduct) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt('return', res.status(400).send({ success: false, message: 'Product not found.' }));

            case 7:
              _context5.next = 9;
              return _productshelper2.default.deleteProduct(id);

            case 9:
              return _context5.abrupt('return', res.status(200).send({ success: true, message: 'Product deleted successfully.' }));

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(500).send({ success: false, message: _context5.t0.message }));

            case 15:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 12]]);
    }));

    function deleteProduct(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return deleteProduct;
  }(),

  getProductSales: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var id, findProduct, result;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              _context6.next = 4;
              return _productshelper2.default.getProductById(id);

            case 4:
              findProduct = _context6.sent;

              if (findProduct) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt('return', res.status(400).send({ success: false, message: 'Product not found.' }));

            case 7:
              _context6.next = 9;
              return _productshelper2.default.getProductSales(id);

            case 9:
              result = _context6.sent;

              if (!(result.length === 0)) {
                _context6.next = 12;
                break;
              }

              return _context6.abrupt('return', res.status(200).send({ success: true, message: 'No records for this product.' }));

            case 12:
              return _context6.abrupt('return', res.status(200).send({ success: true, data: result }));

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6['catch'](0);
              return _context6.abrupt('return', res.status(500).send({ success: false, message: _context6.t0.message }));

            case 18:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 15]]);
    }));

    function getProductSales(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return getProductSales;
  }()
};
module.exports = exports.default;
//# sourceMappingURL=productcontroller.js.map