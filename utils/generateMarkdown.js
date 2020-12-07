function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

${data.installation}

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