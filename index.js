// Variables
const fs = require("fs");
const util = require("util");
const inquirier = rrequirer("inquirer");
const generateReadme = require("./utils/generateReadme");
const writeFileSync = util.promisify(fs.writeFile);

