const { Op } = require('sequelize');
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  try {
    const { nombre, apellido, cedula, email, password } = req.body;

    if (!nombre || !apellido || !cedula || !email || !password) {
      return res.status(400).json({ success: false, mensaje: '❌ Todos los campos son obligatorios' });
    }

    const usuarioExistente = await User.findOne({
      where: {
        [Op.or]: [{ email }, { cedula }]
      }
    });

    if (usuarioExistente) {
      return res.status(400).json({
        success: false,
        mensaje: '⚠️ Este correo o cédula ya está registrado'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      nombre,
      apellido,
      cedula,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      success: true,
      mensaje: '✅ Usuario registrado exitosamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, mensaje: '❌ Error en el servidor. Intenta más tarde.' });
  }
};