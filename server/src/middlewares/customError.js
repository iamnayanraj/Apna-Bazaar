const { logger } = require("../utils/logsetting");
const cls = require("cls-hooked");
const customError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  if (err.statusCode == 500) {
    const traceId = cls.getNamespace("app").get("traceId");
    logger.log({
      level: "error",
      service: req.url,
      method: "",
      traceId: traceId,
      label: "",
      message: `${err} ${err.stack}`,
    });
  }
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
};

module.exports = customError;
