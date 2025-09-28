import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/db/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("🚀 Bienvenida a Mi Cuoco API");
});

// Puerto desde .env o 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
