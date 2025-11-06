import Product from "../models/productsModels.js";

// Crear producto
export const createProductService = async (productData) => {
  const newProduct = new Product(productData);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

// Obtener todos los productos
export const getProductsService = async () => {
  const products = await Product.find().populate("category");

  if (products.length === 0) {
    const error = new Error("There are no products");
    error.statusCode = 204;
    throw error;
  }

  return products;
};

//  Obtener producto por ID (NUEVO)
export const getProductByIdService = async (id) => {
  const product = await Product.findById(id).populate("category");

  return product; // si no existe, devuelve null y el controller se ocupa
};

//  Eliminar producto
export const deleteProductService = async (id) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

// ✅ Actualizar producto
export const updateProductService = async (id, updatedData) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
    new: true, 
  });

  return updatedProduct;
};
