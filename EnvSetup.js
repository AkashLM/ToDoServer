//Environment variables setup.
const dotenv = require("dotenv");
dotenv.config({
  path: "./configure.env",
});
const { PORT } = process.env;

module.exports ={ PORT };
