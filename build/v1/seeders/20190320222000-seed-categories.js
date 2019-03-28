'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  up: function up(queryInterface) {
    return queryInterface.bulkInsert('Categories', [{
      id: '59968089-65d6-438a-b5d3-03ae275fa2de',
      name: 'Predator series',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '3bcbff41-7285-42f4-a934-e346382f3fbc',
      name: 'X series',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
module.exports = exports.default;
//# sourceMappingURL=20190320222000-seed-categories.js.map