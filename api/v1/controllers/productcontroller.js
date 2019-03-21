import ProductHelper from '../helpers/productshelper';

export default {
  createProduct: async (req, res) => {
    const product = req.body;
    try {
      const result = await ProductHelper.createProduct(product);
      return res.status(201).send({
        success: true,
        message: 'Product created successfully.',
        data: result,
      });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const result = await ProductHelper.getAllProducts();
      if (result.length === 0) {
        return res.status(200).send({ success: false, message: 'No products available yet' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await ProductHelper.getProductById(id);
      if (!result) {
        return res.status(400).send({ success: false, message: 'Product not found' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await ProductHelper.getProductById(id);
      if (!product) {
        return res.status(400).send({ success: false, message: 'Product not found.' });
      }

      const {
        name, description, price, quantity, minimumQuantity, imgUrl,
      } = req.body;
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;
      product.minimumQuantity = minimumQuantity || product.minimum_quantity;
      product.imgUrl = imgUrl || product.imgurl;

      const result = await ProductHelper.updateProduct(id, product);
      return res.status(200).send({
        success: true,
        message: 'Product updated successfully',
        data: result,
      });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const findProduct = await ProductHelper.getProductById(id);
      if (!findProduct) {
        return res.status(400).send({ success: false, message: 'Product not found.' });
      }
      await ProductHelper.deleteProduct(id);
      return res.status(200).send({ success: true, message: 'Product deleted successfully.' });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getProductSales: async (req, res) => {
    try {
      const { id } = req.params;
      const findProduct = await ProductHelper.getProductById(id);
      if (!findProduct) {
        return res.status(400).send({ success: false, message: 'Product not found.' });
      }
      const result = await ProductHelper.getProductSales(id);
      if (result.length === 0) {
        return res.status(200).send({ success: true, message: 'No records for this product.' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },
};
