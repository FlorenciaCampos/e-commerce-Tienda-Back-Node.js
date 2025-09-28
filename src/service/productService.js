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