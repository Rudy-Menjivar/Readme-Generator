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

${data.contributing}

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