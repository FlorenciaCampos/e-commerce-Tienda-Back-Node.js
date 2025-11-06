import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,      // ✅ IMPORTAMOS NUEVA FUNCIÓN
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { upload } from "../config/multer.js";

export const productRoute = express.Router();

// ✅ OBTENER TODOS LOS PRODUCTOS
productRoute.get("/getProducts", getProducts);

// ✅ OBTENER 1 PRODUCTO POR ID (NUEVO)
productRoute.get("/getProducts/:id", getProductById);

// ✅ CREAR PRODUCTO (con imagen)
productRoute.post("/create", upload.single("image"), createProduct);

// ✅ ACTUALIZAR PRODUCTO (con imagen)
productRoute.put("/update/:id", upload.single("image"), updateProduct);

// ✅ ELIMINAR PRODUCTO
productRoute.delete("/delete/:id", deleteProduct);
