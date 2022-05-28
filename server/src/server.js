const app = require("./app");
const dotenv = require("dotenv");
const { filepath } = require("./utils/filePath");
// to config config.env file to process.env
dotenv.config({ path: filepath.dotEnvConfigPath });

// process.on("uncaughtException", (err) => {
//   console.log(err.message);
//   console.log("Closing server due to uncaught Exception");
//   process.exit(1);
// });


app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
