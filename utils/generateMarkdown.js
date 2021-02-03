
// generateReadme function populating the README.md
function generateMarkdown(answers, avatar) {
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
🔍 ${answers.description}

## Installation
💾 ${answers.installation}

## Usage
💻 ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.test}

## Questions
✋Have Questions? <br />
<br />
:octocat: Find me ${avatar}on GitHub: [${answers.githubUserName}](https://github.com/${answers.githubUserName})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with ❤️ by [README-generator]()
  `;
}

module.exports = generateMarkdown;
  