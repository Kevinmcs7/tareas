import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Servir los archivos estáticos del frontend (Foro_Frontend/build)
app.use(express.static(path.join(__dirname, '../Foro_Frontend/build')));

// Ruta para la API (si tienes una API REST, la configuras aquí)
app.get('/api', (req, res) => {
  res.send({ message: 'API funcionando correctamente' });
});

// Ruta principal que servirá el archivo index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Foro_Frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
