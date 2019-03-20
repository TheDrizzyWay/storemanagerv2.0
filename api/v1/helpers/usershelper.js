import db from '../models';

const { User } = db;

export default class UserHelper {
  static async signUp(user) {
    const newUser = await User.create(user);
    return newUser;
  }

  static async logIn(email) {
    const findUser = await User.findOne({
      where: { email },
    });
    return findUser;
  }

  static async getAllUsers() {
    const users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return users;
  }

  static async getUserById(id) {
    const user = await User.findOne({
      where: { id },
      attributes: {
        exclude: ['password'],
      },
    });
    return user;
  }

  static async deleteUser(id) {
    const text = 'DELETE FROM users WHERE id = $1';
    const values = [id];
    const result = await db.query(text, values);
    return result;
  }
}
