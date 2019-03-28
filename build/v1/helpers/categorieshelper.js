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

var Category = _models2.default.Category;

var CategoryHelper = function () {
  function CategoryHelper() {
    (0, _classCallCheck3.default)(this, CategoryHelper);
  }

  (0, _createClass3.default)(CategoryHelper, null, [{
    key: 'createCategory',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(category) {
        var newCategory;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Category.create(category);

              case 2:
                newCategory = _context.sent;
                return _context.abrupt('return', newCategory);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createCategory(_x) {
        return _ref.apply(this, arguments);
      }

      return createCategory;
    }()
  }, {
    key: 'getCategoryByName',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(name) {
        var category;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Category.findOne({
                  where: { name: name }
                });

              case 2:
                category = _context2.sent;
                return _context2.abrupt('return', category);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCategoryByName(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getCategoryByName;
    }()
  }, {
    key: 'getAllCategories',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var category;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Category.findAll();

              case 2:
                category = _context3.sent;
                return _context3.abrupt('return', category);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getAllCategories() {
        return _ref3.apply(this, arguments);
      }

      return getAllCategories;
    }()
  }, {
    key: 'getCategoryById',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
        var category;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Category.findByPk(id);

              case 2:
                category = _context4.sent;
                return _context4.abrupt('return', category);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getCategoryById(_x3) {
        return _ref4.apply(this, arguments);
      }

      return getCategoryById;
    }()
  }, {
    key: 'updateCategory',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, category) {
        var name, updatedCategory;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = category.name;
                _context5.next = 3;
                return Category.update({ name: name }, {
                  returning: true,
                  where: { id: id }
                });

              case 3:
                updatedCategory = _context5.sent;
                return _context5.abrupt('return', updatedCategory[1]);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateCategory(_x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return updateCategory;
    }()
  }, {
    key: 'deleteCategory',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(id) {
        var deletedCategory;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Category.destroy({
                  where: { id: id }
                });

              case 2:
                deletedCategory = _context6.sent;
                return _context6.abrupt('return', deletedCategory);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function deleteCategory(_x6) {
        return _ref6.apply(this, arguments);
      }

      return deleteCategory;
    }()
  }]);
  return CategoryHelper;
}();

exports.default = CategoryHelper;
module.exports = exports.default;
//# sourceMappingURL=categorieshelper.js.map