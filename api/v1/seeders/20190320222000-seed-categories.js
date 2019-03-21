export default {
  up: queryInterface => queryInterface.bulkInsert('Categories', [
    {
      id: '59968089-65d6-438a-b5d3-03ae275fa2de',
      name: 'Predator series',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3bcbff41-7285-42f4-a934-e346382f3fbc',
      name: 'X series',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {}),
};
