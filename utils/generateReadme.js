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
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This application is covered by the ${answers.license} license.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  - ${answers.tests}
  
  ## Questions
  ${answers.questions} <br />
  <br/>
  Email me with any questions: ${answers.email} <br/>

  `;
}

module.exports = generateReadme
