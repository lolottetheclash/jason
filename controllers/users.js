const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, users });
  } catch (e) {
    res.status(404).json({ success: false, error: e });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (e) {
    res.status(404).json({ success: false, error: e });
  }
};
