import CategoryHelper from '../helpers/categorieshelper';

export default class CategoryController {
  static async createCategory(req, res) {
    const category = req.body;
    try {
      const result = await CategoryHelper.createCategory(category);
      return res.status(201).send({
        success: true,
        message: 'Category created successfully.',
        data: result,
      });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  }

  static async getAllCategories(req, res) {
    try {
      const result = await CategoryHelper.getAllCategories();
      if (result.length === 0) {
        return res.status(200).send({ success: false, message: 'No categories available yet' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const { id } = req.params;
      const result = await CategoryHelper.getCategoryById(id);
      if (!result) {
        return res.status(400).send({ success: false, message: 'Category not found' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await CategoryHelper.getCategoryById(id);
      if (!category) {
        return res.status(400).send({ success: false, message: 'Category not found.' });
      }
      category.name = req.body.name;
      const result = await CategoryHelper.updateCategory(id, category);
      return res.status(200).send({
        success: true,
        message: 'Category updated successfully',
        data: result,
      });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const findCategory = await CategoryHelper.getCategoryById(id);
      if (!findCategory) {
        return res.status(400).send({ success: false, message: 'Category not found.' });
      }
      await CategoryHelper.deleteCategory(id);
      return res.status(200).send({ success: true, message: 'Category deleted successfully.' });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  }
}
