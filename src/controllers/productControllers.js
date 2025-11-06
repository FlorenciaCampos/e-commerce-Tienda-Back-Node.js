import {
  createProductService,
  getProductsService,
  deleteProductService,
  updateProductService,
  getProductByIdService,
} from "../service/productService.js";

/**
 * Crear un producto
 */
export const createProduct = async (req, res) => {
  try {
    const productData = req.body;

    if (req.file) {
      productData.image = req.file.filename; // almacena el nombre del archivo subido
    }

    const product = await createProductService(productData);
    return res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error en createProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Obtener todos los productos
 */
export const getProducts = async (req, res) => {
  try {
    const products = await getProductsService();
    return res.status(200).json(products);
  } catch (error) {
    if (error.statusCode === 204) return res.sendStatus(204);

    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

/**
 * Obtener un producto por ID
 */
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("❌ Error en getProductById:", error);
    return res.status(500).json({
      message: "Error al obtener el producto",
      error: error.message,
    });
  }
};

/**
 * Eliminar un producto
 */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductService(id);

    if (!deleted) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res
      .status(200)
      .json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};

/**
 * Editar un producto
 */
export const updateProduct = async (req, res) => {
  try {
    const updatedData = req.body;

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedProduct = await updateProductService(
      req.params.id,
      updatedData
    );

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("❌ Error en updateProduct:", error);
    return res.status(500).json({ error: error.message });
  }
};
