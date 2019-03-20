import hashes from '../middleware/hashes';

const password = 'micheal';
const password2 = 'jasonv';
const hashed = hashes.hashPassword(password);
const hashed2 = hashes.hashPassword(password2);

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
    {
      id: '3bcbff41-7285-42f4-a934-e346382f3fbc',
      firstName: 'Jason',
      lastName: 'Voorhees',
      email: 'jasonv@email.com',
      password: hashed2,
      role: 'attendant',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
