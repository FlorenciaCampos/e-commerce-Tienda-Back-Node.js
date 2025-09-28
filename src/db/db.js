
import mongoose from "mongoose";
import { MONGODB_URI } from "../../config.js";  // 👈 ahora sí lo usás

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error(" Error al conectar a MongoDB:", error);
    process.exit(1); // corta la app si falla la DB
  }
};

