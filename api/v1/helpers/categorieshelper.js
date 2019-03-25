import db from '../models';

const { Category } = db;

export default class CategoryHelper {
  static async createCategory(category) {
    const newCategory = await Category.create(category);
    return newCategory;
  }

  static async getCategoryByName(name) {
    const category = await Category.findOne({
      where: { name },
    });
    return category;
  }

  static async getAllCategories() {
    const category = await Category.findAll();
    return category;
  }

  static async getCategoryById(id) {
    const category = await Category.findByPk(id);
    return category;
  }

  static async updateCategory(id, category) {
    const { name } = category;
    const updatedCategory = await Category.update({ name }, {
      returning: true,
      where: { id },
    });
    return updatedCategory[1];
  }

  static async deleteCategory(id) {
    const deletedCategory = await Category.destroy({
      where: { id },
    });
    return deletedCategory;
  }
}
