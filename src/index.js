import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

import express from 'express'; // Si usas Express, por ejemplo
import { connectDB } from './db'; // Asumimos que tienes el archivo db.js

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
