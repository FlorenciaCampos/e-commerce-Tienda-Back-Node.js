import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PORT } from "./config.js";
import { connectDB } from "./src/db/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();


app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
