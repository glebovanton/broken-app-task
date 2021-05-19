require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'gamedb',
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
  }
);

const sync = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, sync };
