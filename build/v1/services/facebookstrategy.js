'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _passportFacebook = require('passport-facebook');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _models2.default.User;

_dotenv2.default.config();

var _process$env = process.env,
    FACEBOOK_APP_ID = _process$env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET = _process$env.FACEBOOK_APP_SECRET;


var facebookSetup = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/api/v1/auth/facebook/callback',
  profileFields: ['id', 'emails', 'name', 'picture.type(large)']
};

var facebookCallback = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(accessToken, refreshToken, profile, cb) {
    var email, _profile$name, familyName, givenName, user;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = profile.emails[0].value;
            _profile$name = profile.name, familyName = _profile$name.familyName, givenName = _profile$name.givenName;
            // const imageUrl = profile.photos[0].value;
            // get provider from profile

            console.log(profile);

            _context.next = 5;
            return User.findOrCreate({
              where: { email: email },
              defaults: {
                firstName: givenName,
                lastName: familyName,
                email: email,
                password: profile.id,
                role: 'attendant'
              }
            });

          case 5:
            user = _context.sent;
            return _context.abrupt('return', cb(null, user.dataValues));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function facebookCallback(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var facebookStrategy = new _passportFacebook.Strategy(facebookSetup, facebookCallback);

exports.default = facebookStrategy;
module.exports = exports.default;
//# sourceMappingURL=facebookstrategy.js.map