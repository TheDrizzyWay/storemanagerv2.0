import hashes from '../middleware/hashes';
import UserHelper from '../helpers/usershelper';

export default {
  signUp: async (req, res) => {
    const user = req.body;
    user.password = hashes.hashPassword(user.password);

    try {
      const newUser = await UserHelper.signUp(user);
      return res.status(201).send({
        success: true,
        message: 'User account created successfully',
        data: newUser,
      });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  logIn: async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await UserHelper.logIn(email);
      if (!result) {
        return res.status(401).send({ success: false, message: 'User account not found.' });
      }
      const { password: userPassword } = result;
      if (!hashes.comparePassword(password, userPassword)) {
        return res.status(401).send({
          success: false,
          message: 'Invalid email/password combination.',
        });
      }
      const { id, role } = result;
      const token = await hashes.generateToken({ id, role });
      return res.status(200).send({ success: true, message: 'You are now logged in.', token });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const result = await UserHelper.getAllUsers();
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await UserHelper.getUserById(id);
      if (!result) {
        return res.status(400).send({ success: false, message: 'User not found' });
      }
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  getCurrentUser: async (req, res) => {
    try {
      const { id } = req.user;
      const result = await User.getUserById(id);
      return res.status(200).send({ success: true, data: result });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const findUser = await User.getUserById(id);
      if (!findUser) {
        return res.status(400).send({ success: false, message: 'User not found.' });
      }
      await User.deleteUser(id);
      return res.status(200).send({ success: true, message: 'User deleted successfully.' });
    } catch (error) {
      return res.status(500).send({ success: false, message: error.message });
    }
  },
  // update user
};
