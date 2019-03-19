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
    const text = 'SELECT * FROM users';
    const { rows } = await db.query(text);
    return rows;
  }

  static async getUserById(id) {
    const text = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    const { rows } = await db.query(text, values);
    return rows[0];
  }

  static async deleteUser(id) {
    const text = 'DELETE FROM users WHERE id = $1';
    const values = [id];
    const result = await db.query(text, values);
    return result;
  }
}
