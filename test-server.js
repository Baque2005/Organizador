const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

app.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});