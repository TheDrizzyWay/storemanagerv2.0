export default {
  development: {
    username: 'postgres',
    password: 'reeves17',
    database: 'storemanagerdb',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'reeves17',
    database: 'storemanagerdb',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
