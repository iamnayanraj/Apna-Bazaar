const winston = require("winston");
require("winston-daily-rotate-file");
const { filepath } = require("./filePath");

const { combine, timestamp, printf } = winston.format;

const requestResponsetransport = new winston.transports.DailyRotateFile({
  filename: filepath.requestResponseLogPath,
  level: "info",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "10k",
  maxFiles: "10",
  extension: ".log",
  auditFile: filepath.requestResponseAuditLogPath,
});

const tracetransport = new winston.transports.DailyRotateFile({
  filename: filepath.traceLogPath,
  level: "error",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "10k",
  maxFiles: "10",
  extension: ".log",
  auditFile: filepath.traceAuditLogPath,
});

const myFormat = printf(
  ({ level, message, label, service, timestamp, method, traceId }) => {
    return `${timestamp} ${level} ${service} ${method} ${traceId} ${label}: ${message}`;
  }
);

const customLevel = {
  info: 0,
  error: 1,
};

const logger = winston.createLogger({
  levels: customLevel,
  format: combine(timestamp({ format: "YYYY-M-DD HH:mm:ss:SSS" }), myFormat),
  transports: [requestResponsetransport, tracetransport],
});

module.exports = { logger };
