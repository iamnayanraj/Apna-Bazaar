const app = require("./app");
const dotenv = require("dotenv");
const { filepath } = require("./utils/filePath");
const sequelize = require("./db/conn");
// to config config.env file to process.env
dotenv.config({ path: filepath.dotEnvConfigPath });

// app.use(async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// });

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
