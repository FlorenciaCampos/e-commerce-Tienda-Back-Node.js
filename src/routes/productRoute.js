import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../controllers/productControllers.js';
import { upload } from "../config/multer.js";

export const productRoute = express.Router();

// READ
productRoute.get("/getProducts", getProducts);

// DELETE
productRoute.delete("/delete/:id", deleteProduct);

// CREATE (con imagen)
productRoute.post("/create", upload.single("image"), createProduct);

// UPDATE (con imagen)
productRoute.put("/update/:id", upload.single("image"), updateProduct);
