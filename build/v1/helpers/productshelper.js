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

var Product = _models2.default.Product;

var ProductHelper = function () {
  function ProductHelper() {
    (0, _classCallCheck3.default)(this, ProductHelper);
  }

  (0, _createClass3.default)(ProductHelper, null, [{
    key: 'createProduct',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(product) {
        var newProduct;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Product.create(product);

              case 2:
                newProduct = _context.sent;
                return _context.abrupt('return', newProduct);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createProduct(_x) {
        return _ref.apply(this, arguments);
      }

      return createProduct;
    }()
  }, {
    key: 'getAllProducts',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var products;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Product.findAll();

              case 2:
                products = _context2.sent;
                return _context2.abrupt('return', products);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAllProducts() {
        return _ref2.apply(this, arguments);
      }

      return getAllProducts;
    }()
  }, {
    key: 'getProductById',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
        var product;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Product.findByPk(id);

              case 2:
                product = _context3.sent;
                return _context3.abrupt('return', product);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getProductById(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getProductById;
    }()
  }, {
    key: 'getProductByName',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(name) {
        var product;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Product.findOne({
                  where: { name: name }
                });

              case 2:
                product = _context4.sent;
                return _context4.abrupt('return', product);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getProductByName(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getProductByName;
    }()
  }, {
    key: 'updateProduct',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, product) {
        var name, description, price, quantity, minimumQuantity, imgUrl, updatedProduct;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = product.name, description = product.description, price = product.price, quantity = product.quantity, minimumQuantity = product.minimumQuantity, imgUrl = product.imgUrl;
                _context5.next = 3;
                return Product.update({
                  name: name, description: description, price: price, quantity: quantity, minimumQuantity: minimumQuantity, imgUrl: imgUrl
                }, {
                  returning: true,
                  where: { id: id }
                });

              case 3:
                updatedProduct = _context5.sent;
                return _context5.abrupt('return', updatedProduct[1]);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateProduct(_x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return updateProduct;
    }()
  }, {
    key: 'deleteProduct',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(id) {
        var deletedProduct;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Product.destroy({
                  where: { id: id }
                });

              case 2:
                deletedProduct = _context6.sent;
                return _context6.abrupt('return', deletedProduct);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteProduct(_x6) {
        return _ref6.apply(this, arguments);
      }

      return deleteProduct;
    }()
  }, {
    key: 'updateProductQuantity',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(id, newQuantity) {
        var updatedQuantity;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Product.update({
                  quantity: newQuantity
                }, {
                  where: { id: id }
                });

              case 2:
                updatedQuantity = _context7.sent;
                return _context7.abrupt('return', updatedQuantity);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updateProductQuantity(_x7, _x8) {
        return _ref7.apply(this, arguments);
      }

      return updateProductQuantity;
    }()
  }, {
    key: 'getProductSales',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(id) {
        var text, prodSales;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                text = 'SELECT p.id, p.name, p.price, s.quantity_sold, s.total,\n    s.sold_at FROM Products p INNER JOIN Sales s ON p.id = s.product_id\n    WHERE p.id = ?';
                _context8.next = 3;
                return _models2.default.query(text, { replacements: [id] });

              case 3:
                prodSales = _context8.sent;
                return _context8.abrupt('return', prodSales);

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getProductSales(_x9) {
        return _ref8.apply(this, arguments);
      }

      return getProductSales;
    }()
  }]);
  return ProductHelper;
}();

exports.default = ProductHelper;
module.exports = exports.default;
//# sourceMappingURL=productshelper.js.map