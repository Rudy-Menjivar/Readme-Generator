function standardContributing(data) {
  if (data.contributing == "Yes") {
    return `To participate in this project, please review the following guidelines:
    * [Submit feature requests and bugs](https://github.com/${data.github}/${data.title}/issues)` 
  }
    return `Contributing isn't active at this time.`
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Content

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Run the following command to install dependencies:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${standardContributing(data)}

## Tests

${data.tests}

## License

${data.license}

## Questions

${data.github}
${data.email}

  `;
  }
  module.exports = generateMarkdown;