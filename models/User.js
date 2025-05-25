const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre no puede estar vacío' },
    }
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El apellido no puede estar vacío' },
    }
  },
  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'La cédula no puede estar vacía' },
      len: {
        args: [10, 13],
        msg: 'La cédula debe tener entre 10 y 13 dígitos'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'El email no puede estar vacío' },
      isEmail: { msg: 'Debe ser un email válido' }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La contraseña no puede estar vacía' },
      len: {
        args: [6, 100],
        msg: 'La contraseña debe tener al menos 6 caracteres'
      }
    }
  }
}, {
  tableName: 'users',      // ✅ nombre exacto de la tabla (minúsculas)
  freezeTableName: true    // ✅ evita que Sequelize pluralice o modifique el nombre
});

module.exports = User;