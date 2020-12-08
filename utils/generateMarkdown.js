function addDescription(data) {
  if (data.description !== '') {
    return `## Description
    \n
    \n${data.description}`
  }
  return ''
}

function installLink(data) {
  if (data.installation !== '') {
    return `* [Installation](#installation)`
  }
  return ''
}

function addInstall(data) {
  if (data.installation !== '') {
    return `## Installation

Run the following command before installing any dependencies:
  \`\`\`
  ${data.installation}
  \`\`\`
  `
  }
  return ''
}

function usageLink(data) {
  if (data.usage !=='') {
    return `* [Usage](#usage)`
  }
  return ''
}

function contributeLink(data) {
  if (data.contributing !=="No") {
    return `* [Contributing](#contributing)`
  }
  return ''
}

function addContributing(data) {
  if (data.contributing == "Yes") {
    return `## Contributing
    \n
    \nTo participate in this project, please review the following guidelines:
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
    return ``
}

function testsLink(data) {
  if (data.tests !== '') {
    return `* [Tests](#tests)`
  }
  return ''
}

function addtests(data) {
  if (data.tests !== '') {
    return `## Tests
    
  Run the following command for testing:
  \`\`\`
  ${data.tests}
  \`\`\`
  `
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.title}

${addDescription(data)}

## Content

${installLink(data)}

${usageLink(data)}

${contributeLink(data)}

${testsLink(data)}

* [Questions](#questions)

${addInstall(data)}

## Usage

Run the following command to run this application:

\`\`\`
${data.usage}
\`\`\`

${addContributing(data)}

${addtests(data)}

## License

Copyright (c) ${data.github}. All rights reserved.

Licensed under the ${data.license} license.

## Questions

${data.github}
${data.email}

  `;
  }
  module.exports = generateMarkdown;