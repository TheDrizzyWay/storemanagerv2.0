import db from '../models';

const { Categories } = db;

export default class CategoryHelper {
  static async createCategory(category) {
    const newCategory = await Categories.create(category);
    return newCategory;
  }

  static async getCategoryByName(name) {
    const category = await Categories.findOne({
      where: { name },
    });
    return category;
  }

  static async getAllCategories() {
    const text = 'SELECT * FROM categories';
    const { rows } = await pool.query(text);
    return rows;
  }

  static async getCategoryById(id) {
    const text = 'SELECT * FROM categories WHERE id = $1';
    const values = [id];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  static async updateCategory(id, category) {
    const { name } = category;
    const text = `UPDATE categories SET name = $1, updated_at = NOW()
    WHERE id = $2 RETURNING *`;
    const values = [name, id];
    const { rows } = await pool.query(text, values);
    return rows[0];
  }

  static async deleteCategory(id) {
    const text = 'DELETE FROM categories WHERE id = $1';
    const values = [id];
    const result = await pool.query(text, values);
    return result;
  }
}
