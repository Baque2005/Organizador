const { Sequelize } = require('sequelize');
require('dotenv').config();
console.log('URL de conexión:', process.env.DATABASE_URL); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production'
      ? { require: true, rejectUnauthorized: false }
      : false,
  },
});

module.exports = sequelize;