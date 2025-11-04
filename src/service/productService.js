import Product, { statusEnum } from "../models/productsModels.js";

export const createProductService = async (productData) => {
   const newProduct = new Product(productData)
   const savedProduct = await newProduct.save()
   return savedProduct 
}

export const getProductsService = async () => {
    
   const products = await Product.find().populate("category")
    if(products.length === 0){
        const error = new Error(" There are no products ")
        error.statusCode = 204
        throw error
    }
    return products
}

// ✅ Service para eliminar producto
export const deleteProductService = async (id) => {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
};

// ✅ Service para actualizar producto
export const updateProductService = async (id, updatedData) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true, // devuelve el producto ya actualizado
    });
  
    return updatedProduct;
  };
  