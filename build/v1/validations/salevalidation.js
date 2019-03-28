'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertText = function convertText(a) {
  return (a.charAt(0).toUpperCase() + a.slice(1)).trim();
};

exports.default = {
  createSaleValid: function createSaleValid(req, res, next) {
    var sales = req.body.sales;

    var counter = 0;
    var productLength = sales.length;
    var errors = [];

    sales.forEach(function (sale) {
      var name = sale.name,
          quantitySold = sale.quantitySold;

      var newName = convertText(name);
      var newQuantitySold = quantitySold.trim();

      if (!newName || _validator2.default.isEmpty(newName)) {
        errors.push('Please input product name.');
      }
      if (!quantitySold || _validator2.default.isEmpty(quantitySold) || quantitySold <= 0 || !_validator2.default.isNumeric(quantitySold)) {
        errors.push('Please input a valid quantity for ' + newName + '.');
      }

      var newQuantitySold2 = parseInt(newQuantitySold.trim(), 10).toFixed(0);
      sales[counter].name = newName;
      sales[counter].quantitySold = newQuantitySold2;
      counter += 1;
      if (counter === productLength) {
        if (errors.length > 0) {
          return res.status(400).send({ success: false, data: errors });
        }
        next();
      }
      return true;
    });
  },

  checkRepeat: function checkRepeat(req, res, next) {
    var sales = req.body.sales;

    var counter = 0;
    var productLength = sales.length;
    var keyArray = [];

    sales.forEach(function (sale) {
      var name = sale.name;

      keyArray.push(name);
      counter += 1;

      if (counter === productLength) {
        var keySet = new _set2.default(keyArray);
        if (keyArray.length !== keySet.size) {
          return res.status(400).send({
            success: false,
            message: 'No product should be selected more than once.'
          });
        }
        next();
      }
      return true;
    });
  }
};
module.exports = exports.default;
//# sourceMappingURL=salevalidation.js.map