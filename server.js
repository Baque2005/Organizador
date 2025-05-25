const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');


const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // o pon el dominio exacto de tu frontend si está en otro lado
  credentials: true
}));
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
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🟢 Servidor ejecutándose en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('🔴 Error al conectar con PostgreSQL:', err);
});