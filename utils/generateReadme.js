//generateREADME function
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.projectTitle} <h1>
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `
}

module.exports = generateMarkdown;
