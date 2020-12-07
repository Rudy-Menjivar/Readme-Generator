function generateMarkdown(data) {
    return `
    # ${data.title}

    ## ${data.description}

    ## ${data.installation}
    
    ## ${data.usage}

    ## ${data.contributing}

    ## ${data.tests}

    ## ${data.license}

    ## ${data.github}

    ## ${data.email}
  
  `;
  }
  
  module.exports = generateMarkdown;