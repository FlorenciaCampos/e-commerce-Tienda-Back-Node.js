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


productRoute.get("/getProducts", getProducts);

productRoute.get("/getProducts/:id", getProductById);

productRoute.post("/create", upload.single("image"), createProduct);

productRoute.put("/update/:id", upload.single("image"), updateProduct);

productRoute.delete("/delete/:id", deleteProduct);
