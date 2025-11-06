import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { PORT } from "./src/config/config.js";
import { connectDB } from "./src/db/db.js";
import { userRoute } from './src/routes/userRoute.js';
import { categoryRoute } from './src/routes/categoryRoute.js';
import { productRoute } from "./src/routes/productRoute.js";

dotenv.config();

const app = express();

// Necesario para obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Servir imágenes estáticas (solo UNA VEZ)
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

// Conexión a la base de datos
connectDB();

// Rutas base - Agrupa las rutas de un recurso
app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📁 Archivos estáticos expuestos en: http://localhost:${PORT}/uploads/`);
});
