// test-connection.js

require('dotenv').config()
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DEV_DATABASE_URL)

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });