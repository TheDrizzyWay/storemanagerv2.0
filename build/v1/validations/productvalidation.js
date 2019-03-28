'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _productshelper = require('../helpers/productshelper');

var _productshelper2 = _interopRequireDefault(_productshelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertText = function convertText(a) {
  return (a.charAt(0).toUpperCase() + a.slice(1)).trim();
};

exports.default = {
  createProductValid: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
      var _req$body, name, description, price, quantity, minimumQuantity, imgUrl, errors, checkInput, checkImgUrl, newName, newDescription, newImgUrl, fields, emptyField, newPrice, newQuantity, newMinimumQuantity, result;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, quantity = _req$body.quantity, minimumQuantity = _req$body.minimumQuantity, imgUrl = _req$body.imgUrl;
              errors = [];
              checkInput = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
              checkImgUrl = /(http(s?):(\/){2})([^/])([/.\w\s-])*\.(?:jpg|png)/g;
              newName = convertText(name);
              newDescription = description.trim();
              newImgUrl = imgUrl.trim();
              fields = [newName, newDescription, price, quantity, minimumQuantity, newImgUrl];
              emptyField = void 0;

              fields.map(function (field) {
                if (!field || _validator2.default.isEmpty(field)) {
                  emptyField = true;
                }
                return emptyField;
              });

              if (!emptyField) {
                _context.next = 12;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'Please fill in all fields.' }));

            case 12:

              if (checkInput.test(newName)) {
                errors.push('Product name should contain only alphabets and numbers.');
              }
              if (!_validator2.default.isLength(newName, { min: 2, max: 50 })) {
                errors.push('Product name should be between 2 and 50 characters long');
              }
              if (!_validator2.default.isLength(newDescription, { min: 2, max: 200 })) {
                errors.push('Product description should be between 2 and 200 characters long');
              }
              if (checkInput.test(newDescription)) {
                errors.push('Product description should contain only alphabets and numbers.');
              }
              if (!_validator2.default.isNumeric(price)) {
                errors.push('Product price should contain only numbers');
              }
              if (!_validator2.default.isNumeric(quantity)) {
                errors.push('Product quantity should contain only numbers');
              }
              if (!_validator2.default.isNumeric(minimumQuantity)) {
                errors.push('Product minimum quantity should contain only numbers');
              }
              if (!checkImgUrl.test(newImgUrl)) {
                errors.push('Please insert a valid image link.');
              }

              if (!(errors.length > 0)) {
                _context.next = 22;
                break;
              }

              return _context.abrupt('return', res.status(400).send({
                success: false,
                data: errors
              }));

            case 22:
              newPrice = parseFloat(price.trim(), 10).toFixed(2);
              newQuantity = parseInt(quantity.trim(), 10);
              newMinimumQuantity = parseInt(minimumQuantity.trim(), 10);


              req.body.name = newName;
              req.body.description = newDescription;
              req.body.price = newPrice;
              req.body.quantity = newQuantity;
              req.body.minimumQuantity = newMinimumQuantity;
              req.body.imgUrl = newImgUrl;

              _context.prev = 31;
              _context.next = 34;
              return _productshelper2.default.getProductByName(newName);

            case 34:
              result = _context.sent;

              if (!result) {
                _context.next = 37;
                break;
              }

              return _context.abrupt('return', res.status(400).send({ success: false, message: 'This product already exists.' }));

            case 37:
              _context.next = 42;
              break;

            case 39:
              _context.prev = 39;
              _context.t0 = _context['catch'](31);
              return _context.abrupt('return', res.status(500).send({ success: false, message: _context.t0.message }));

            case 42:
              return _context.abrupt('return', next());

            case 43:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[31, 39]]);
    }));

    function createProductValid(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return createProductValid;
  }(),

  updateProductValid: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
      var _req$body2, name, description, price, quantity, minimumQuantity, imgUrl, errors, checkInput, checkImgUrl, newName, newDescription, newImgUrl, newPrice, newQuantity, newMinimumQuantity, result;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, price = _req$body2.price, quantity = _req$body2.quantity, minimumQuantity = _req$body2.minimumQuantity, imgUrl = _req$body2.imgUrl;
              errors = [];
              checkInput = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
              checkImgUrl = /(http(s?):(\/){2})([^/])([/.\w\s-])*\.(?:jpg|png)/g;

              if (!(!name && !description && !price && !quantity && !minimumQuantity && !imgUrl)) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ success: false, message: 'Please fill in one or more fields.' }));

            case 6:
              if (name) {
                newName = convertText(name);

                if (checkInput.test(newName)) {
                  errors.push('Product name should contain only alphabets and numbers.');
                }
                if (!_validator2.default.isLength(newName, { min: 2, max: 50 })) {
                  errors.push('Product name should be between 2 and 50 characters long');
                }
                req.body.name = newName;
              }
              if (description) {
                newDescription = description.trim();

                if (!_validator2.default.isLength(newDescription, { min: 2, max: 200 })) {
                  errors.push('Product description should be between 2 and 200 characters long');
                }
                if (checkInput.test(newDescription)) {
                  errors.push('Product description should contain only alphabets and numbers.');
                }
                req.body.description = newDescription;
              }
              if (imgUrl) {
                newImgUrl = imgUrl.trim();

                if (!checkImgUrl.test(newImgUrl)) {
                  errors.push('Please insert a valid image link.');
                }
                req.body.imgUrl = newImgUrl;
              }
              if (price) {
                if (!_validator2.default.isNumeric(price)) {
                  errors.push('Product price should contain only numbers');
                }
                newPrice = parseFloat(price.trim(), 10).toFixed(2);

                req.body.price = newPrice;
              }
              if (quantity) {
                if (!_validator2.default.isNumeric(quantity)) {
                  errors.push('Product quantity should contain only numbers');
                }
                newQuantity = parseInt(quantity.trim(), 10);

                req.body.quantity = newQuantity;
              }
              if (minimumQuantity) {
                if (!_validator2.default.isNumeric(minimumQuantity)) {
                  errors.push('Product minimum quantity should contain only numbers');
                }
                newMinimumQuantity = parseInt(minimumQuantity.trim(), 10);

                req.body.minimumQuantity = newMinimumQuantity;
              }

              if (!(errors.length > 0)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({
                success: false,
                data: errors
              }));

            case 14:
              _context2.prev = 14;

              if (!req.body.name) {
                _context2.next = 21;
                break;
              }

              _context2.next = 18;
              return _productshelper2.default.getProductByName(req.body.name);

            case 18:
              result = _context2.sent;

              if (!result) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt('return', res.status(400).send({ success: false, message: 'This product already exists.' }));

            case 21:
              _context2.next = 26;
              break;

            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2['catch'](14);
              return _context2.abrupt('return', res.status(500).send({ success: false, message: _context2.t0.message }));

            case 26:
              return _context2.abrupt('return', next());

            case 27:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[14, 23]]);
    }));

    function updateProductValid(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return updateProductValid;
  }()
};
module.exports = exports.default;
//# sourceMappingURL=productvalidation.js.map