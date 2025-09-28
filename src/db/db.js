import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // carga variables del archivo .env

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mi_cuoco";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // corta la app si falla la DB
  }
};
