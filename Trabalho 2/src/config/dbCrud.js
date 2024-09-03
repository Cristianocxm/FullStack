require("dotenv").config({path: "./src/.env"});

module.exports = {
  development: {
    username: 'postgres',
    password: 'qTUvOJhgTiwMYvdzrdzbQEWHNyxSaIRJ',
    database: 'railway',
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
