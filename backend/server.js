const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// 🔥 Servir React desde el backend
app.use(express.static(path.join(__dirname, 'build')));

// Si no encuentra rutas de API, responde con React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

sequelize.sync().then(() => {
  console.log('🟢 Base de datos sincronizada con Sequelize');
  app.listen(5000, () => {
    console.log('🟢 Servidor ejecutándose en http://localhost:5000');
  });
}).catch(err => {
  console.error('🔴 Error al conectar con PostgreSQL:', err);
});