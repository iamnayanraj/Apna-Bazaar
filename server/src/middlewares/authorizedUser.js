const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("./asyncError");

const authorizedUser = (...roles) => {
  return asyncError((req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      return next(
        new ErrorHandler("You are not authorized to access this resource", 403)
      );
    }

    next();
  });
};

module.exports = { authorizedUser };
