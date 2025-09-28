import { createProductService, deleteProductService, findProductByIdService, findProductByNameService, getProductsService, getStatusService, updateProductService } from "../services/productService.js"

export const createProduct = async (req, res) => {
    try {
        const savedProduct = await createProductService(req.body)
        return res.status(200).json(savedProduct)
    } catch (error) {
        return res.status(500).json({message: "internal server error", error: error.message})
    }
}