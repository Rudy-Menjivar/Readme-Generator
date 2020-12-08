function standardContributing(data) {
  if (data.contributing == "Yes") {
    return `To participate in this project, please review the following guidelines:
    \n1. Create a branch for your update (after forking and cloning)
    \n   \`git checkout -b <branchName>\`
    \n2. Make changes or additions to new or existing file & stage it
    \n   \`git add <fileName.ext>\`
    \n3. Commit your file by adding comments about code enhancements
    \n   \`git commmit -m <your code comments>\`
    \n4. Push your changes with your remote branch name
    \n   \`git push -u origin <branchName>\`
    \n5. Finally, submit [feature requests and bugs](https://github.com/${data.github}/${data.title}/issues) and open a [pull request](https://github.com/${data.github}/${data.title}/pulls)`
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

Run the following command before installing any dependencies:

\`\`\`
${data.installation}
\`\`\`

## Usage

Run the following command to run this application:

\`\`\`
${data.usage}
\`\`\`

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