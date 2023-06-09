const cls = require("cls-hooked");
const clsNameSpace = cls.createNamespace("app");

const uuid = require("uuid");

const getTraceId = (req, res, next) => {
  const traceId = uuid.v4();

  clsNameSpace.run(() => {
    cls.getNamespace("app").set("traceId", traceId);
   
    next();
  });
};

module.exports = { getTraceId };
