const path = require("path");

// all app file paths

const filepath = {
  dotEnvConfigPath: path.join(__dirname, "../config", "config.env"),
  erroLogPath: path.join(__dirname, "../logs", "errorLog.log"),
  requestResponseLogPath: path.join(__dirname, "../logs", "requestResponseLog"),
  traceLogPath: path.join(__dirname, "../logs", "traceLog"),
  requestResponseAuditLogPath: path.join(
    __dirname,
    "../logs/auditlogs",
    "requestResponseAuditLog.json"
  ),
  traceAuditLogPath: path.join(
    __dirname,
    "../logs/auditlogs/",
    "traceAuditLog.json"
  ),
};

module.exports = { filepath };
