const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];
const sequelize = new Sequelize(configEnv);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);

module.exports = db;
