const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const comparePassword = (Password, hashedPassword) => {
  return bcrypt.compare(Password, hashedPassword);
};

module.exports = { comparePassword, hashPassword };
