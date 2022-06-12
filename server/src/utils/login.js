const jwt = require("jsonwebtoken");
const login = (user, res, statusCode) => {
  const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRY,
  });

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, cookieOptions).status(statusCode).json({
    success: true,
    token,
    user,
  });
};

module.exports = { login };
