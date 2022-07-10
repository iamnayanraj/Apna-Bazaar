const { logger } = require("../utils/logsetting");
const cls = require("cls-hooked");
const interceptRequestResponse = (req, res, next) => {
  const traceId = cls.getNamespace("app").get("traceId");
  logger.log({
    level: "info",
    message: JSON.stringify(req.body),
    label: "request",
    service: req.url,
    method: req.method,
    traceId: traceId,
  });
  let oldSend = res.send;
  res.send = function (data) {
    logger.log({
      level: "info",
      message: data,
      label: "response",
      service: req.url,
      method: "",
      traceId: traceId,
    });
    oldSend.apply(res, arguments);
  };
  next();
};

module.exports = { interceptRequestResponse };
