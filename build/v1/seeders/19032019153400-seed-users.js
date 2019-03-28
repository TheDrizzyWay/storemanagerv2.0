'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashes = require('../middleware/hashes');

var _hashes2 = _interopRequireDefault(_hashes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var password = 'micheal';
var password2 = 'jasonv';
var hashed = _hashes2.default.hashPassword(password);
var hashed2 = _hashes2.default.hashPassword(password2);

exports.default = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      id: '8e75ed1c-c48a-4de2-9f8c-df597aeace8f',
      firstName: 'Micheal',
      lastName: 'Myers',
      email: 'mikemyers@email.com',
      password: hashed,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '3bcbff41-7285-42f4-a934-e346382f3fbc',
      firstName: 'Jason',
      lastName: 'Voorhees',
      email: 'jasonv@email.com',
      password: hashed2,
      role: 'attendant',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
module.exports = exports.default;
//# sourceMappingURL=19032019153400-seed-users.js.map