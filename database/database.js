const Sequelize = require('sequelize');
const connection = new Sequelize('database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;