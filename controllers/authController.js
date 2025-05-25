const { Op } = require('sequelize');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Función para validar email
function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

// Función para validar contraseña
function validarPassword(password) {
  return password.length >= 6;
}

exports.registerUser = async (req, res) => {
  try {
    console.log('🟡 Datos recibidos en el registro:', req.body);

    const { nombre, apellido, cedula, email, password } = req.body;

    if (!nombre || !apellido || !cedula || !email || !password) {
      return res.status(400).json({ success: false, mensaje: '⚠️ Todos los campos son obligatorios.' });
    }

    if (!validarEmail(email)) {
      return res.status(400).json({ success: false, mensaje: '⚠️ Correo electrónico no válido.' });
    }

    if (!validarPassword(password)) {
      return res.status(400).json({ success: false, mensaje: '⚠️ La contraseña debe tener al menos 6 caracteres.' });
    }

    const usuarioExistente = await User.findOne({
      where: {
        [Op.or]: [{ email }, { cedula }]
      }
    });

    if (usuarioExistente) {
      return res.status(400).json({ success: false, mensaje: '⚠️ Ya existe un usuario con ese correo o cédula.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      nombre,
      apellido,
      cedula,
      email,
      password: hashedPassword
    });

    res.status(201).json({ success: true, mensaje: '✅ Usuario registrado correctamente.' });
  } catch (error) {
    console.error('❌ Error en el registro:', error);
    res.status(500).json({ success: false, mensaje: '❌ Error en el servidor. Inténtalo más tarde.' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, mensaje: '⚠️ Correo y contraseña son obligatorios.' });
    }

    const usuario = await User.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ success: false, mensaje: '❌ Correo no registrado.' });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({ success: false, mensaje: '❌ Contraseña incorrecta.' });
    }

    res.json({
      success: true,
      mensaje: '✅ Inicio de sesión exitoso.',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email
      }
    });
  } catch (error) {
    console.error('❌ Error en el login:', error);
    res.status(500).json({ success: false, mensaje: '❌ Error del servidor. Intenta de nuevo más tarde.' });
  }
};