import express from 'express';
import {
  createProduct,
  getProducts,
  updateProduct,   // ✅ AGREGAR
  deleteProduct    // ✅ AGREGAR
} from '../controllers/productControllers.js';

export const productRoute = express.Router();

// CREATE
productRoute.post("/create", createProduct);

// READ
productRoute.get("/getProducts", getProducts);

// UPDATE  ✅ (editar)
productRoute.put("/update/:id", updateProduct);

// DELETE ✅ (eliminar)
productRoute.delete("/delete/:id", deleteProduct);
