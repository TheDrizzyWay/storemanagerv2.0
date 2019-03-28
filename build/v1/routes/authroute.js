'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _usercontroller = require('../controllers/usercontroller');

var _usercontroller2 = _interopRequireDefault(_usercontroller);

var _authmiddleware = require('../middleware/authmiddleware');

var _authvalidation = require('../validations/authvalidation');

var _authvalidation2 = _interopRequireDefault(_authvalidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logIn = _usercontroller2.default.logIn,
    signUp = _usercontroller2.default.signUp;
var logInValid = _authvalidation2.default.logInValid,
    signUpValid = _authvalidation2.default.signUpValid;


var authRouter = _express2.default.Router();

authRouter.post('/signup', _authmiddleware.requireAuth, _authmiddleware.adminAuth, signUpValid, signUp);
authRouter.post('/login', logInValid, logIn);
authRouter.get('/facebook', _passport2.default.authenticate('facebook', { scope: ['email'] }));
authRouter.get('/facebook/callback', _passport2.default.authenticate('facebook', { session: false }), function (req, res) {
  console.log(req.user);
  res.status(200).send('working');
});

exports.default = authRouter;
module.exports = exports.default;
//# sourceMappingURL=authroute.js.map