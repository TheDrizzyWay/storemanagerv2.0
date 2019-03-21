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
    const product = await Product.findOne({
      where: { id },
    });
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
    const text = 'DELETE FROM products WHERE id = $1';
    const values = [id];
    const result = await pool.query(text, values);
    return result;
  }

  static async updateProductQuantity(id, data) {
    const text = 'UPDATE products SET quantity = $1 WHERE id = $2';
    const values = [data, id];
    const result = await pool.query(text, values);
    return result;
  }

  static async getProductSales(id) {
    const text = `SELECT p.id, p.name, p.price, s.quantity_sold, s.total,
    s.sold_at FROM products p INNER JOIN sales s ON p.id = s.product_id
    WHERE p.id = $1`;
    const values = [id];
    const { rows } = await pool.query(text, values);
    return rows;
  }
}
