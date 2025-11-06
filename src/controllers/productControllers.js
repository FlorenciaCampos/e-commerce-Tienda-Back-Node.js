import {
  createProductService,
  getProductsService,
  deleteProductService,
  updateProductService,
} from "../service/productService.js";

export const createProduct = async (req, res) => {
  try {
    console.log("📩 BODY recibido:", req.body);
    console.log("🖼️ FILE recibido:", req.file);

    const productData = req.body;

    // Si multer recibió un archivo, guardamos el filename en la BD
    if (req.file) {
      productData.image = req.file.filename;
    }

    const product = await createProductService(productData);
    res.status(201).json(product);
  } catch (error) {
    console.error("❌ Error en createProduct:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await getProductsService();
    return res.status(200).json(products);
  } catch (error) {
    if (error.statusCode === 204) {
      return res.sendStatus(204);
    }
    if (error.statusCode === 400) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "internal server error", error: error.message });
  }
};

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

export const updateProduct = async (req, res) => {
  try {
    console.log("📝 BODY recibido en UPDATE:", req.body);
    console.log("🖼️ FILE recibido en UPDATE:", req.file);

    const updatedData = req.body;

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedProduct = await updateProductService(
      req.params.id,
      updatedData
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("❌ Error en updateProduct:", error);
    res.status(500).json({ error: error.message });
  }
};
