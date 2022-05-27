const chalk = require("chalk");
// const chalkAnimation = require("chalk-animation");

global.logError = (Para) => {
  console.log(chalk.red.bgBlack("====>", Para));
  console.log(
    chalk.yellowBright(
      "..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-.."
    )
  );
};

global.logSuccess = (Para) => {
  console.log(chalk.blueBright.bgBlack("====>", Para));
  chalk.yellowBright(
    "..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-.."
  );
};

global.logObj = (Para) => {
  console.log(chalk.greenBright.bgBlack("====>", Para));
  chalk.yellowBright(
    "..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-..-.."
  );
};


module.exports = {
  logError,
  logSuccess,
  logObj,
};
