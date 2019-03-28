'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUUID = require('validator/lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  idValid: function idValid(req, res, next) {
    var id = req.params.id;


    if (!(0, _isUUID2.default)(id, 4)) {
      return res.status(422).send({
        success: false,
        message: 'Please insert a valid id'
      });
    }
    return next();
  }
};
module.exports = exports.default;
//# sourceMappingURL=idvalidation.js.map