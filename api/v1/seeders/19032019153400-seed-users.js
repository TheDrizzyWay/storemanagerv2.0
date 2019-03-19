import hashes from '../middleware/hashes';

const password = 'micheal';
const hashed = hashes.hashPassword(password);

export default {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: '8e75ed1c-c48a-4de2-9f8c-df597aeace8f',
      firstName: 'Micheal',
      lastName: 'Myers',
      email: 'mikemyers@email.com',
      password: hashed,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
