const sequelize = require('./db'); // Asegúrate de que el path sea correcto

async function probarConexion() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL establecida con éxito.');
  } catch (error) {
    console.error('❌ No se pudo conectar:', error);
  }
}

probarConexion();