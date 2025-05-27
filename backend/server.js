const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config(); // Asegúrate de tener esto

const app = express();

// Middleware para parsear solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Rutas API
app.use('/api/auth', authRoutes);

// Servir frontend React
app.use(express.static(path.join(__dirname, 'build')));

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