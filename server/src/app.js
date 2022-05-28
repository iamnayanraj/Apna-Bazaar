const express = require("express");
const customError = require("./middlewares/customError");
const app = express();
const productRoutes = require("./routes/productRoutes");

app.use(express.json());


app.use("/api/v1", productRoutes);
app.use(customError);

module.exports = app;
