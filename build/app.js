'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _routes = require('./v1/routes');

var _routes2 = _interopRequireDefault(_routes);

var _facebookstrategy = require('./v1/services/facebookstrategy');

var _facebookstrategy2 = _interopRequireDefault(_facebookstrategy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.static(_path2.default.join(__dirname, '../UI')));

_passport2.default.use(_facebookstrategy2.default);
app.use(_passport2.default.initialize());

app.use('/api/v1', _routes2.default);

app.get('/*', function (req, res) {
  res.status(404).send({ message: 'Invalid request.' });
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  return console.log('Server running on port ' + port);
});

exports.default = app;
module.exports = exports.default;
//# sourceMappingURL=app.js.map