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

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use(customError);

module.exports = app;
