
// generateReadme function populating the README.md
function generateMarkdown(answers, avatar) {
  return `
<h1 align="center">${answers.projectTitle} </h1>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)-
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
🔍 ${answers.description}

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.test}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Questions
✋Have Questions? <br />
<br />
![Developer Profile Picture](${avatar}) 
:octocat: Find me on GitHub: [${answers.githubUserName}](https://github.com/${answers.githubUserName})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with ❤️ by [README-generator]()
  `;
}

module.exports = generateMarkdown;
  