const { Sequelize } = require('sequelize');

// Usa cadena de conexión en lugar de parámetros separados
const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/gestion_tareas');

module.exports = sequelize;