const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// to config config.env file to process.env
const dotenv = require("dotenv");
const { filepath } = require("./utils/filePath");
dotenv.config({ path: filepath.dotEnvConfigPath });

const customError = require("./middlewares/customError");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const {
  interceptRequestResponse,
} = require("./middlewares/interceptRequestResponse");
const { getTraceId } = require("./middlewares/getTraceId");
const { schemaValidation } = require("./middlewares/schemaValidation");

app.use(express.json());
app.use(cookieParser());

app.use(getTraceId);

app.use(interceptRequestResponse);

app.use(schemaValidation);

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use(customError);

module.exports = app;
