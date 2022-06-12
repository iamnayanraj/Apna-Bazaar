const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("./asyncError");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const isAuthenticatedUser = asyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedJwt = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await UserModel.findOne({ where: { userId: decodedJwt.id } });

  next();
});

module.exports = { isAuthenticatedUser };
