import { createProductService, getProductsService, deleteProductService ,  updateProductService  } from '../service/productService.js'


export const createProduct = async (req, res) => {
    try {
        const savedProduct = await createProductService(req.body)
        return res.status(200).json(savedProduct)
    } catch (error) {
        return res.status(500).json({message: "internal server error", error: error.message})
    }
}

  

export const getProducts = async (req, res) => {
    try {
        const products = await getProductsService()
        return res.status(200).json(products)
    } catch (error) {
        if(error.statusCode === 204){
            return res.sendStatus(204)
        }
        if(error.statusCode === 400){
            return res.status(400).json({ message: error.message })
        }
        return res.status(500).json({message: "internal server error", error: error.message})
    }
}


export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await deleteProductService(id);
  
      if (!deleted) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
  
      return res.status(200).json({ message: "Producto eliminado correctamente" });
    } catch (error) {
      return res.status(500).json({
        message: "Error al eliminar el producto",
        error: error.message,
      });
    }
  };
  
  
export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedProduct = await updateProductService(id, req.body);
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }
  
      return res.status(200).json(updatedProduct);
    } catch (error) {
      return res.status(500).json({
        message: "Error al actualizar el producto",
        error: error.message,
      });
    }
  };
  