import db from '../models';

const { Product } = db;

export default class ProductHelper {
  static async createProduct(product) {
    const newProduct = await Product.create(product);
    return newProduct;
  }

  static async getAllProducts() {
    const products = await Product.findAll();
    return products;
  }

  static async getProductById(id) {
    const product = await Product.findByPk(id);
    return product;
  }

  static async getProductByName(name) {
    const product = await Product.findOne({
      where: { name },
    });
    return product;
  }

  static async updateProduct(id, product) {
    const {
      name, description, price, quantity, minimumQuantity, imgUrl,
    } = product;
    const updatedProduct = await Product.update({
      name, description, price, quantity, minimumQuantity, imgUrl,
    }, {
      returning: true,
      where: { id },
    });
    return updatedProduct[1];
  }

  static async deleteProduct(id) {
    const deletedProduct = await Product.destroy({
      where: { id },
    });
    return deletedProduct;
  }

  static async updateProductQuantity(id, newQuantity) {
    const updatedQuantity = await Product.update({
      quantity: newQuantity,
    }, {
      where: { id },
    });
    return updatedQuantity;
  }

  static async getProductSales(id) {
    const text = `SELECT p.id, p.name, p.price, s.quantity_sold, s.total,
    s.sold_at FROM Products p INNER JOIN Sales s ON p.id = s.product_id
    WHERE p.id = ?`;
    const prodSales = await db.query(text, { replacements: [id] });
    return prodSales;
  }
}
