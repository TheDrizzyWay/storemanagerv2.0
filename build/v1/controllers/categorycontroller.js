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

var _categorieshelper = require('../helpers/categorieshelper');

var _categorieshelper2 = _interopRequireDefault(_categorieshelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryController = function () {
  function CategoryController() {
    (0, _classCallCheck3.default)(this, CategoryController);
  }

  (0, _createClass3.default)(CategoryController, null, [{
    key: 'createCategory',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var category, result;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                category = req.body;
                _context.prev = 1;
                _context.next = 4;
                return _categorieshelper2.default.createCategory(category);

              case 4:
                result = _context.sent;
                return _context.abrupt('return', res.status(201).send({
                  success: true,
                  message: 'Category created successfully.',
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
        }, _callee, this, [[1, 8]]);
      }));

      function createCategory(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return createCategory;
    }()
  }, {
    key: 'getAllCategories',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _categorieshelper2.default.getAllCategories();

              case 3:
                result = _context2.sent;

                if (!(result.length === 0)) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt('return', res.status(200).send({ success: false, message: 'No categories available yet' }));

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
        }, _callee2, this, [[0, 9]]);
      }));

      function getAllCategories(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return getAllCategories;
    }()
  }, {
    key: 'getCategoryById',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var id, result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = req.params.id;
                _context3.next = 4;
                return _categorieshelper2.default.getCategoryById(id);

              case 4:
                result = _context3.sent;

                if (result) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt('return', res.status(400).send({ success: false, message: 'Category not found' }));

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
        }, _callee3, this, [[0, 10]]);
      }));

      function getCategoryById(_x5, _x6) {
        return _ref3.apply(this, arguments);
      }

      return getCategoryById;
    }()
  }, {
    key: 'updateCategory',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var id, category, result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.prev = 1;
                _context4.next = 4;
                return _categorieshelper2.default.getCategoryById(id);

              case 4:
                category = _context4.sent;

                if (category) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt('return', res.status(400).send({ success: false, message: 'Category not found.' }));

              case 7:
                category.name = req.body.name;
                _context4.next = 10;
                return _categorieshelper2.default.updateCategory(id, category);

              case 10:
                result = _context4.sent;
                return _context4.abrupt('return', res.status(200).send({
                  success: true,
                  message: 'Category updated successfully',
                  data: result
                }));

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](1);
                return _context4.abrupt('return', res.status(500).send({ success: false, message: _context4.t0.message }));

              case 17:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 14]]);
      }));

      function updateCategory(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return updateCategory;
    }()
  }, {
    key: 'deleteCategory',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var id, findCategory;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = req.params.id;
                _context5.next = 4;
                return _categorieshelper2.default.getCategoryById(id);

              case 4:
                findCategory = _context5.sent;

                if (findCategory) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt('return', res.status(400).send({ success: false, message: 'Category not found.' }));

              case 7:
                _context5.next = 9;
                return _categorieshelper2.default.deleteCategory(id);

              case 9:
                return _context5.abrupt('return', res.status(200).send({ success: true, message: 'Category deleted successfully.' }));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5['catch'](0);
                return _context5.abrupt('return', res.status(500).send({ success: false, message: _context5.t0.message }));

              case 15:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));

      function deleteCategory(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return deleteCategory;
    }()
  }]);
  return CategoryController;
}();

exports.default = CategoryController;
module.exports = exports.default;
//# sourceMappingURL=categorycontroller.js.map