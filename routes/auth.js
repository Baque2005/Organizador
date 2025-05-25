const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // 🔑 Agregado
const { Op } = require('sequelize');

const JWT_SECRET = process.env.JWT_SECRET || 'claveSuperSecreta123'; // ✅ Lee desde .env

function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function validarPassword(password) {
  return password.length >= 6;
}

// 🟢 REGISTRO
router.post('/register', async (req, res) => {
  const { nombre, apellido, cedula, correo, contrasena } = req.body;

  if (!nombre || !apellido || !cedula || !correo || !contrasena) {
    return res.status(400).json({ success: false, mensaje: '⚠️ Todos los campos son obligatorios.' });
  }

  if (!validarEmail(correo)) {
    return res.status(400).json({ success: false, mensaje: '⚠️ Correo electrónico no válido.' });
  }

  if (!validarPassword(contrasena)) {
    return res.status(400).json({ success: false, mensaje: '⚠️ La contraseña debe tener al menos 6 caracteres.' });
  }

  try {
    const usuarioExistente = await User.findOne({
      where: {
        [Op.or]: [{ email: correo }, { cedula }]
      }
    });

    if (usuarioExistente) {
      return res.status(400).json({ success: false, mensaje: '⚠️ Ya existe un usuario con ese correo o cédula.' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    await User.create({
      nombre,
      apellido,
      cedula,
      email: correo,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, mensaje: '✅ Usuario registrado correctamente.' });
  } catch (error) {
    console.error('❌ Error en el registro:', error);
    res.status(500).json({ success: false, mensaje: '❌ Error en el servidor. Inténtalo más tarde.' });
  }
});

// 🔐 LOGIN
router.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    return res.status(400).json({ success: false, mensaje: '⚠️ Correo y contraseña son obligatorios.' });
  }

  try {
    const usuario = await User.findOne({ where: { email: correo } });

    if (!usuario) {
      return res.status(401).json({ success: false, mensaje: '❌ Correo no registrado.' });
    }

    const contrasenaValida = await bcrypt.compare(contrasena, usuario.password);
    if (!contrasenaValida) {
      return res.status(401).json({ success: false, mensaje: '❌ Contraseña incorrecta.' });
    }

    // 🔑 Generar token JWT
    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
      },
      JWT_SECRET,
      { expiresIn: '2h' } // Puedes cambiar el tiempo
    );

    res.json({
      success: true,
      mensaje: '✅ Inicio de sesión exitoso.',
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.email
      }
    });
  } catch (error) {
    console.error('❌ Error en el login:', error);
    res.status(500).json({ success: false, mensaje: '❌ Error del servidor. Intenta de nuevo más tarde.' });
  }
});

module.exports = router;